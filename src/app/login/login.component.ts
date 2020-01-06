import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DataService } from '../../DataService';
//import { first } from 'rxjs/operators';

//import { AlertService, AuthenticationService } from '../_services';
interface User {
    username: any,
    password: any
}


@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    isRegisterSubmitted = false;
    registerSuccess = false;
    returnUrl: string;
    status: string = "User Registered Successfully";
    registerMsg = "";

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService
       // private authenticationService: AuthenticationService,
       // private alertService: AlertService
       ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email_id: ['', Validators.required],
            password: ['', Validators.required]
        });

        //register form
        this.registerForm = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email_id: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit(loginForm) {
        this.submitted = true;
        console.log(loginForm);
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        /*this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
        this.dataService.authenticateAdminUser(loginForm).subscribe(data => {
            if (null == data) {
                this.loading = false;
                console.log('user authenticate failed');
                return false;
            } else {
                this.router.navigate(['/admin']);
                this.loading = false;
            }
        });
         /* if (ServiceConstant.username == this.f.username.value &&
                ServiceConstant.password == this.f.password.value) {
                //return true;
                this.router.navigate(['/admin']);
                this.loading = false;
              } else {
                this.loading = false;
                return false;
              }*/
    }

    onClickSubmit(registerForm) {
        this.isRegisterSubmitted = true;
        console.log(registerForm);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        //this.loading = true;
        /*this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
        this.dataService.registerUser(registerForm).subscribe(data => {
            if (null == data) {
                this.registerSuccess = false;
                this.registerMsg = "user register failed";
                console.log('user register failed');
                return false;
            } /*else if (JSON.stringify(data) == "user already registered") {
                //this.router.navigate(['/login']);
                console.log(data);
                this.registerMsg = "user already registered"
                this.registerSuccess = false;
            }*/ else {
                console.log(data);
                const obj = JSON.parse(JSON.stringify(data));
                this.registerMsg = obj.message;
                this.registerSuccess = true;
            }
        });
         /* if (ServiceConstant.username == this.f.username.value &&
                ServiceConstant.password == this.f.password.value) {
                //return true;
                this.router.navigate(['/admin']);
                this.loading = false;
              } else {
                this.loading = false;
                return false;
              }*/
    }

    clearRegisterForm() {
        this.registerForm.reset();
        this.registerMsg = "";
        this.registerSuccess = false;
        this.isRegisterSubmitted = false;
    }
}
