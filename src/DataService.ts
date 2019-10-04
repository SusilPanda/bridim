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

    saveEnquiry(usr : any) {
        const body = "";
        return this.http.post(ServiceConstant.HOST + '/api/save/enquiry/', {
           user : usr
          }
        );
    }
    

   
}
