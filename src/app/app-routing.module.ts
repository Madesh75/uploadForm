import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelUploadComponent } from './excel-upload/excel-upload.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path: 'login', component:LoginComponent},
  {path:'excel-upload',component:ExcelUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }