import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiRoot: string = 'http://dummy.restapiexample.com/api/v1/';

    constructor(
        private http: HttpClient
    ) { }

    getEmployees(){
        return this.http.get(this.apiRoot +'employees');
    }

    getEmpDetails(id){
        return this.http.get(this.apiRoot +'employee/'+id);
    }

    createEmp(data){
        return this.http.post(this.apiRoot +'create',data);
    }

    updateEmp(id,data){
        return this.http.put(this.apiRoot +'update/'+id,data);
    }
}
