import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

    emp: object;
    loading: boolean = true;
    modalRef: BsModalRef;
    empForm: FormGroup
    submitted: boolean = false;

    @ViewChild('template') elementView: ElementRef;

    constructor(
        private api: ApiService,
        private route: ActivatedRoute,
        private modalService: BsModalService,
        private router: Router,
        private fb: FormBuilder,
    ) { }

    ngOnInit() {
        this.createForm();
        this.getEmpDetails();
        this.modalService.onHide.subscribe(
            () => {
                this.router.navigate(['/list'])
            }
        );
    }

    getEmpDetails() {
        this.api.getEmpDetails(this.route.snapshot.params.id).subscribe(
            (data: object) => {
                this.emp = data;
                this.patchForm(data);
                this.loading = false;
            },
            (error: object) => {
                this.loading = false;
            }
        )
    }

    createForm() {
        this.empForm = this.fb.group({
            name: ['', Validators.required],
            age: ['', Validators.required],
            salary: ['', Validators.required],
        });
    }

    patchForm(data){
        this.empForm.setValue({
            name: data.employee_name,
            age: data.employee_age,
            salary: data.employee_salary
        });
    }

    updateEmp(){
        this.submitted = true;
        if (this.empForm.invalid) {
            return;
        }
        this.loading = true;
        this.api.updateEmp(this.route.snapshot.params.id,this.empForm.value).subscribe(
            (data) => {
                this.loading = false;
                this.submitted = false;
                this.modalRef = this.modalService.show(this.elementView);
            },
            (error) => {

            }
        )
    }

    onDestroy() {
        this.modalService.onHide.unsubscribe();
    }
}
