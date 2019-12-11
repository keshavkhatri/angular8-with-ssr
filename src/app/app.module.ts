import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NavComponent } from './nav/nav.component';
import { UpdateComponent } from './update/update.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        AddComponent,
        HomeComponent,
        DetailsComponent,
        NavComponent,
        UpdateComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        CommonModule,
        TransferHttpCacheModule,
        NgtUniversalModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
