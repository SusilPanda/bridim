import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/DataService';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-online-form-submission-management',
  templateUrl: './online-form-submission-management.component.html',
  styleUrls: ['./online-form-submission-management.component.scss']
})
export class OnlineFormSubmissionManagementComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    //private authenticationService: AuthenticationService,
    private dataService: DataService
    ) { }

  onlineVisaForm: FormGroup;
  OnlineVisaFormList: [];


  ngOnInit() {
    this.onlineVisaForm = this.formBuilder.group({
      passport_num: ['', Validators.required],
      name: ['', Validators.required],
      visa_desc: ['', Validators.required],
      visa_status: ['', Validators.required]
    });

    this.getAllTask();
    // reset login status
    // this.authenticationService.logout();
   
    // get return url from route parameters or default to '/'
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.onlineVisaForm.controls; }

  getAllTask() {
    console.log("got a getAll request");
    //$scope.taskList = data;
    this.dataService.getAllOnlineVisaForm().subscribe(data => {
      // console.log(data);
      this.OnlineVisaFormList = data;
      console.log(this.OnlineVisaFormList);
      //this.submittedSuccess = true;
    });
  };
  onlineFormError: boolean = false;
  onlineFormErrorMessage: string;
  submitted:boolean=false;
  fileToBeDownload : File;

downloadFileCopy(passport: string, fileName: string ) {
  console.log(fileName);
  //console.log(this.selectedPassportNum);
  this.dataService.downloadOnlineVisaDoc(fileName).subscribe(data => {
    if (null == data) {
      this.onlineFormError = true;
      this.onlineFormErrorMessage = "Passport number Incorrect Or File Name incorrect";
     
    } else {
      this.fileToBeDownload = data;
      this.onlineFormError = false;
    }
  
      let blob:any = new Blob([data], { type: 'text/json; charset=utf-8' });

      // IE doesn't allow using a blob object directly as link href
      // instead it is necessary to use msSaveOrOpenBlob
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob);
          return;
      }

      // For other browsers:
      // Create a link pointing to the ObjectURL containing the blob.
      const downloadURL = URL.createObjectURL(blob);
       // window.open(downloadURL);
       //window.location.href = downloadURL;
        fileSaver.saveAs(blob, fileName);
   
    //console.log(data);
  //  console.log('visa app status : ');
   // console.log(this.visaAppStatus);
});
};

}