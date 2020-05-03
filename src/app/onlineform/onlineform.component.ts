import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {DataService } from '../../DataService';


@Component({
  selector: 'app-onlineform',
  templateUrl: './onlineform.component.html',
  styleUrls: ['./onlineform.component.scss']
})
export class OnlineformComponent implements OnInit {

    onlineForm: FormGroup;
    //registerForm: FormGroup;
    loading = false;
    submitted = false;
    isFormSubmitted = false;
    registerSuccess = false;
    returnUrl: string;
    status: string = "Application Form Submitted Successfully, We will get back to you";
    registerMsg = "";
    fileSubmittedSuccess : boolean = false;
    uploadError = false;
    uploadErrorFileSizeExceed = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService
       // private authenticationService: AuthenticationService,
       // private alertService: AlertService
       ) {}

    ngOnInit() {
        this.onlineForm = this.formBuilder.group({
          first_name: [null, Validators.required],
          last_name: [null, Validators.required],
          dob: [null, Validators.required],
          passport_number: [null, Validators.required],
          passport_doi: [null, Validators.required, ],
          passport_doe: [null, Validators.required],
          email_id: ['', Validators.required],
          mobile_number: ['', Validators.required],
          sec_year: ['', Validators.required],
          sec_percentage: ['', Validators.required],
          highersec_year: [''], //Validators.required],
          highersec_percentage: [''], //Validators.required],
          graduate_year: [''],
          graduate_percentage: [''],
          masters_year: [''],
          masters_percentage: [''],
          experience_stdate: [''],
          experience_endate: [''],
          ielts: [null, Validators.required],
          ielts_band: [''],
          
          passport_copy: [null],
          sec_marksheet: [null], 
          highersec_marksheet: [''],
          graduate_marksheet: [''],
          masters_marksheet: [''],
          ielts_cert: ['']
        });

        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

     /*const isValidDate = (c: FormControl) => {
      const DATE_REGEXP = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
      return DATE_REGEXP.test(c.value) || c.value === '' ? null : {
        validateEmail: {
          valid: false
        }
      };
    }*/
    // convenience getter for easy access to form fields
    get f() { return this.onlineForm.controls; }

    onSubmit(onlineForm) {
        this.submitted = true;
        //console.log(loginForm);
        // stop here if form is invalid
        if (this.onlineForm.invalid) {
            return;
        }

        this.loading = true;

        this.dataService.submitOnlineApplicationForm(onlineForm).subscribe(data => {
            if (null == data) {
                this.loading = false;
                console.log('application submit failed');
                return false;
            } else {
               console.log('application submitted');
                //this.router.navigate(['/admin']);
                this.loading = false;
            }
        });
        
    }

    passportCopy: File = null;
    secCert: File = null;
    higherSecCert: File = null;
    degreeCert: File = null;
    ieltsCert: File = null;

  handleFileInput(files: FileList) {
    this.passportCopy = files.item(0);
    //this.secCert = files.item(1);
  }
  handleSecFileInput(files: FileList) {
    //this.fileToUpload = files.item(0);
    this.secCert = files.item(0);
  }

  handleHigherSecFileInput(files: FileList) {
    this.higherSecCert = files.item(0);
  }

  handleDegreeFileInput(files: FileList) {
    this.degreeCert = files.item(0);
  }

  handleIeltsFileInput(files: FileList) {
    this.ieltsCert = files.item(0);
  }
  onUploadSubmit(onlineForm) {
    this.submitted = true;
    console.log('upload online form received');
    const uploadFileForm: FormData = new FormData();
    
    // stop here if form is invalid
    if (this.onlineForm.invalid) {
      console.log('form invalid');
      return;
    }

  this.loading = true;
    //console.log(this.secCert.name);
    if (this.passportCopy != null) {
      uploadFileForm.append('file1', this.passportCopy, this.passportCopy.name);
    }
    if (this.secCert != null) {
      uploadFileForm.append('file2', this.secCert, this.secCert.name);
    }
    if (this.higherSecCert != null) {
      uploadFileForm.append('file3', this.higherSecCert, this.higherSecCert.name);
    }
    if (this.degreeCert != null) {
      uploadFileForm.append('file4', this.degreeCert, this.degreeCert.name);
    }
    if (this.ieltsCert != null) {
      uploadFileForm.append('file5', this.ieltsCert, this.ieltsCert.name);
    }
  
    //onlineForm.passport_copy = uploadFileForm;
    console.log(onlineForm);
    //var newObj = JSON.stringify(onlineForm);
    //console.log(newObj);
    uploadFileForm.append('first_name', onlineForm.first_name);
    uploadFileForm.append('last_name', onlineForm.last_name);
    uploadFileForm.append('dob', onlineForm.dob);
    uploadFileForm.append('passport_number', onlineForm.passport_number);
    uploadFileForm.append('passport_doi', onlineForm.passport_doi);
    uploadFileForm.append('passport_doe', onlineForm.passport_doe);
    uploadFileForm.append('email_id', onlineForm.email_id);
    uploadFileForm.append('mobile_number', onlineForm.mobile_number);
    uploadFileForm.append('sec_year', onlineForm.sec_year);
    uploadFileForm.append('sec_percentage', onlineForm.sec_percentage);
    uploadFileForm.append('highersec_year', onlineForm.highersec_year);
    uploadFileForm.append('highersec_percentage', onlineForm.highersec_percentage);
    uploadFileForm.append('graduate_year', onlineForm.graduate_year);
    uploadFileForm.append('graduate_percentage', onlineForm.graduate_percentage);
    uploadFileForm.append('masters_year', onlineForm.masters_year);
    uploadFileForm.append('masters_percentage', onlineForm.masters_percentage);
    uploadFileForm.append('experience_stdate', onlineForm.experience_stdate);
    uploadFileForm.append('experience_endate', onlineForm.experience_endate);
    uploadFileForm.append('ielts', onlineForm.ielts);
    uploadFileForm.append('ielts_band', onlineForm.ielts_band);


    this.dataService.uploadOnlineVisaForm(uploadFileForm).subscribe(data => {
      // console.log(data);
      //this.visaAppStatus = data;
      console.log(data);
      if(data != null) {
        this.fileSubmittedSuccess = true;
        console.log('online form application submitted');
        this.uploadError = false;
        this.uploadErrorFileSizeExceed = false;
        this.loading = false;
        this.router.navigate(['/submitsuccess']);
        
      } else {
        console.log('Error in upload ');
        this.fileSubmittedSuccess = false;
        this.uploadError = true;
        this.uploadErrorFileSizeExceed = false;
        this.loading = false;
        return false;
      }
      //this.fileSubmittedSuccess = true;
    },
    error => {
      console.log('Error in upload ');
      this.uploadError = true;
      console.log(error);
      //console.log(error.status);
      if (error.status === 422 && error.error.code === 'LIMIT_FILE_SIZE') {
        this.uploadErrorFileSizeExceed = true;
      }
        this.fileSubmittedSuccess = false;
        this.loading = false;
        return false;
    });
  }

  toFormData<T>( formValue: T ) {
    const formData = new FormData();
  
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
  
    return formData;
  }

  
}
