import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    employees: Array<any>;
    loading:boolean = true;

    constructor(
        private api: ApiService
    ) { }

    ngOnInit() {
        this.getAllEmp();
    }

    getAllEmp() {
        this.api.getEmployees().subscribe(
            (data:Array<any>) => {
                this.employees = data.slice(0,52);
                this.loading = false;
            },
            (error)=>{
                this.loading = false;
            }
        )
    }

}
