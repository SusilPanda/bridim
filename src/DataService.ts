import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import {ResponseType} from '@angular/common/http';
import { ServiceConstant } from './environments/ServiceConstant';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {
    //host: string = "http://localhost:8080";
    constructor(private http: HttpClient) {

    }

    getAllUsers() {
        return this.http.get<any>(ServiceConstant.HOST + '/api/users/');
                   
    }

    saveEnquiry(userEnq : any) {
        //const body = "";
        return this.http.post(ServiceConstant.HOST + '/api/userrequest/save/', userEnq
          
        );
    }

    getUserEnquiry(userEnq : any) {
        //const body = "";
        return this.http.get(ServiceConstant.HOST + '/api/userrequest/save/', userEnq._id
        );
    }

    bookAnAppointment(contactfrmdata : any) {
        //const body = "";
        return this.http.post(ServiceConstant.HOST + '/api/userappointment/save', contactfrmdata
          
        );
    }

    getBookedAppointment(contactfrmdata : any) {
        return this.http.get(ServiceConstant.HOST + '/api/userappointment', contactfrmdata._id);
    }

    getAllBookedAppointment() {
        return this.http.get(ServiceConstant.HOST + '/api/userappointment');
    }

    getVisaStatus(passportNum:string) {
        return this.http.get<any>(ServiceConstant.HOST + '/api/uservisastatus/'+passportNum);
    }
    

    // Admin management
    getAllVisaStatus() {
        return this.http.get<any>(ServiceConstant.HOST + '/api/uservisastatus');
    }

    createUserVisaStatus(visaAppStatus: any) {
        return this.http.post(ServiceConstant.HOST + '/api/uservisastatus', visaAppStatus);
    }
   
    updateUserVisaStatus(visaAppStatus: any) {
        return this.http.put(ServiceConstant.HOST + '/api/uservisastatus', visaAppStatus);
    }

    deleteUserVisaStatus(visaAppStatus: any) {
        return this.http.delete(ServiceConstant.HOST + '/api/uservisastatus/'+ visaAppStatus.passport_num);
    }

    //Admin authentication
    authenticateAdminUser(userForm: any) {
        return this.http.post(ServiceConstant.HOST + '/api/user/authenticate', userForm);
    }

    //User Register
    registerUser(registerForm: any) {
        return this.http.post(ServiceConstant.HOST + '/api/user/register', registerForm);
    }

    //Upload Visa Form
    uploadVisaForm(uploadForm: any, passport: string) {
        let headers =  {headers: new  HttpHeaders({ 'passport_num': passport})};
        return this.http.post(ServiceConstant.HOST + '/api/upload', uploadForm, headers);
    }

     //Download Visa Form
     downloadVisaStatusForm1(fileName:string) {
         var body = {}
        //let headers =  {headers: new  HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded'})};
        

  const httpOptions = {
    responseType: 'blob' as 'json',
    headers: new HttpHeaders({
      
    })
  };
        return this.http.get<any>(ServiceConstant.HOST + '/api/download/'+ fileName, httpOptions);
    }

    downloadVisaStatusForm(fileName:string): Observable<any>{
		return this.http.get(ServiceConstant.HOST + '/api/download/'+ fileName, {responseType: 'blob'});
  }

  // Online Application submit section
  submitOnlineApplicationForm(frmdata : any) {
    //const body = "";
    return this.http.post(ServiceConstant.HOST + '/api/applyonlineform/save', frmdata
      
    );
}

//Upload Online Visa Form
uploadOnlineVisaForm(uploadForm: any) {
    //let headers =  {headers: new  HttpHeaders({ 'passport_num': passport})};
    let headers =  {headers : new HttpHeaders({'Content-Type': 'multipart/form-data'})};
    return this.http.post(ServiceConstant.HOST + '/api/upload/onlineform', uploadForm);
}

getAllOnlineVisaForm() {
    return this.http.get<any>(ServiceConstant.HOST + '/api/applyonlineform');
}

downloadOnlineVisaDoc(fileName:string): Observable<any>{
    return this.http.get(ServiceConstant.HOST + '/api/download/onlineform/'+ fileName, {responseType: 'blob'});
}


}
