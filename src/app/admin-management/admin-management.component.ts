import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/DataService';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { first } from 'rxjs/operators';

//import { AlertService, AuthenticationService } from '../_services';

interface VisaAppStatus {
  id;
  passport_num;
  name;
  visa_desc;
  visa_status;
}
interface AdminLogin {
  id;
  emailId;
  password;
}
interface UploadForm {
  id;
  fileName;
}

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.scss']
})

//@Component({templateUrl: 'login.component.html'})
export class AdminManagementComponent implements OnInit {


  visaAppStatus: VisaAppStatus;
  allVisaAppStatus: [];
  adminLogin: AdminLogin;
  checked: boolean = false;


  visaForm: FormGroup;
  loading = false;
  submitted = false;
  fileSubmittedSuccess = false;
  returnUrl: string;

  uploadForm: FormGroup;
  uploadFormSubmittedSuccess: false;
  fileData: File = null;
  passportForFileUpload: string;

fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
}

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    //private authenticationService: AuthenticationService,
    //private alertService: AlertService,
    private dataService: DataService) { }

  ngOnInit() {
    this.visaForm = this.formBuilder.group({
      passport_num: ['', Validators.required],
      name: ['', Validators.required],
      visa_desc: ['', Validators.required],
      visa_status: ['', Validators.required]
    });

    this.getAllTask();
    // reset login status
    // this.authenticationService.logout();
    this.uploadForm = this.formBuilder.group({
      file: ['', Validators.required]
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.visaForm.controls; }

  onClickSubmit(visaFormData) {
    this.submitted = true;
    console.log('Inside on click visa task submit');
    // stop here if form is invalid
    if (visaFormData.invalid) {
      return;
    }

    this.loading = true;
    this.dataService.createUserVisaStatus(visaFormData).subscribe(data => {

      //this.visaAppStatus = data;
      console.log(data);
      //this.submittedSuccess = true;
    });
    /*this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            }); */
    // refresh list
    this.getAllTask();
    //this.visaForm = null;
  }
  editVisaStatus(visaAppStatus) {
    this.visaForm = this.formBuilder.group({
      passport_num: [visaAppStatus.passport_num],
      name: [visaAppStatus.name],
      visa_desc: [visaAppStatus.visa_desc],
      visa_status: [visaAppStatus.visa_status]
    });
  }

  getAllTask() {
    console.log("got a getAll request");
    //$scope.taskList = data;
    this.dataService.getAllVisaStatus().subscribe(data => {
      // console.log(data);
      this.allVisaAppStatus = data;
      console.log(this.allVisaAppStatus);
      //this.submittedSuccess = true;
    });
  };


  createVisaStatus(visaAppStatus: any) {
    console.log("received create req : " + visaAppStatus);
    this.dataService.createUserVisaStatus(visaAppStatus).subscribe(data => {
      // console.log(data);
      //this.visaAppStatus = data;
      console.log(data);
      //this.submittedSuccess = true;
    });
    // refresh the list
    this.getAllTask();

  };

  deleteVisaStatus(visaAppStatus) {
    console.log("got a delete request : " + visaAppStatus);
    this.dataService.deleteUserVisaStatus(visaAppStatus).subscribe(data => {
      // console.log(data);
      //this.visaAppStatus = data;
      console.log(data);
      //this.submittedSuccess = true;
    });
    //refresh the task list
    this.getAllTask();
  };

  updateVisaStatus(visaAppStatus) {
    console.log("received update req : " + visaAppStatus);
    this.dataService.updateUserVisaStatus(visaAppStatus).subscribe(data => {
      // console.log(data);
      //this.visaAppStatus = data;
      console.log(data);
      //this.submittedSuccess = true;
    });
    //refresh the task list
    this.getAllTask();

  }
  // method to set passport num while file upload
  editVisaStatusForUpload(visaAppStatus) {
    this.passportForFileUpload = visaAppStatus.passport_num;
    console.log(this.passportForFileUpload);
  }
  fileToUpload: File = null;

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}
  onUploadSubmit(uploadForm) {
    console.log('upload form received');
    const uploadFileForm: FormData = new FormData();
    uploadFileForm.append('file', this.fileToUpload, this.fileToUpload.name);
    uploadFileForm.append('passport_num', this.passportForFileUpload);
    this.dataService.uploadVisaForm(uploadFileForm, this.passportForFileUpload).subscribe(data => {
      // console.log(data);
      //this.visaAppStatus = data;
      //console.log(data);
      if(data != null) {
        this.fileSubmittedSuccess = true;
      } else {
        this.fileSubmittedSuccess = false;
      }
      //this.fileSubmittedSuccess = true;
    });
  }

}
