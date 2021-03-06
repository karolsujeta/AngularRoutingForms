import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataComponent } from './data/data.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: DataComponent },
  { path: 'mainpage', component: FormComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routableComponents = [
  DataComponent, FormComponent
];