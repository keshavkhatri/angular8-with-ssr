import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'list',
        component: ListComponent
    },
    {
        path: 'add',
        component: AddComponent
    },
    {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: 'update/:id',
        component: UpdateComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
