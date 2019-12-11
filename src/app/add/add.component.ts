import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

    modalRef: BsModalRef;
    empForm:FormGroup
    submitted:boolean = false;
    loading:boolean = false;

    @ViewChild('template') elementView: ElementRef;

    constructor(
        private api:ApiService,
        private fb: FormBuilder,
        private modalService: BsModalService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.createForm();
        this.modalService.onHide.subscribe(
            () => {
                this.router.navigate(['/list'])
            }
        );
    }

    createForm(){
        this.empForm = this.fb.group({
            name: ['', Validators.required],
            age: ['', Validators.required],
            salary: ['', Validators.required],
        });
    }

    submit(){
        this.submitted = true;
        if(this.empForm.invalid){
            return;
        }
        this.loading = true;
        this.api.createEmp(this.empForm.value).subscribe(
            (data)=>{
                this.loading = false;
                this.submitted = false;
                this.empForm.reset();
                this.modalRef = this.modalService.show(this.elementView);
            },
            (error)=>{

            }
        )
    }

    onDestroy(){
        this.modalService.onHide.unsubscribe();
    }
}
