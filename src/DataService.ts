import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ServiceConstant } from './environments/ServiceConstant';

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
    

   
}
