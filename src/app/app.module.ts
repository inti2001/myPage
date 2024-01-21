import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/Home/Home.component';
import { ResumeComponent } from './pages/Resume/Resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ProfessionalComponent } from './components/professional/professional.component';
import { AboutMeComponent } from './components/AboutMe/AboutMe.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    ResumeComponent,
    ProfessionalComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
