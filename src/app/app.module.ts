import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { AvailableSubjectComponent } from './pages/available-subject/available-subject.component';
import {MatButtonModule} from '@angular/material/button';
;



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TeacherComponent,
    AvailableSubjectComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
