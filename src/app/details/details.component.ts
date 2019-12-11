import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    today: Date;
    emp: object;
    loading: boolean = true;

    constructor(
        private api: ApiService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.today = new Date;
        this.getEmpDetails();
    }

    getEmpDetails() {
        this.api.getEmpDetails(this.route.snapshot.params.id).subscribe(
            (data: object) => {
                this.emp = data;
                this.loading = false;
            },
            (error: object) => {
                this.loading = false;
            }
        )
    }

    delete(){
        // TODO: Implement Delete functionality
    }
}
