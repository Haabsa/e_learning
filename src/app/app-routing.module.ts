import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableSubjectComponent } from './pages/available-subject/available-subject.component';
import { LoginComponent } from'./Pages/login/login.component';
import { TeacherComponent } from './pages/teacher/teacher.component';


const routes: Routes = [{
path:'',component:LoginComponent},
{
  path:'teacher',
  component:TeacherComponent,
},
{
  path:'available-subject',
  component:AvailableSubjectComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
