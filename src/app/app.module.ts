import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';

import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DataService} from '../DataService';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OnlineformComponent } from './onlineform/onlineform.component';
import { FormsubmitsuccessComponent } from './formsubmitsuccess/formsubmitsuccess.component';
import { OnlineFormSubmissionManagementComponent } from './online-form-submission-management/online-form-submission-management.component';
import { FacebookModule } from 'ngx-facebook';
import { InfoAustraliaComponent } from './moreinfo/info-australia/info-australia.component';
import {InfoCanadaComponent} from './moreinfo/info-canada/info-canada.component';
import {InfoUkComponent} from './moreinfo/info-uk/info-uk.component';

import { InfoNzComponent } from './moreinfo/info-nz/info-nz.component';
import { InfoSgComponent } from './moreinfo/info-sg/info-sg.component';
import { InfoMalaysiaComponent } from './moreinfo/info-malaysia/info-malaysia.component';
import { InfoJapanComponent } from './moreinfo/info-japan/info-japan.component';
import { InfoUsaComponent } from './moreinfo/info-usa/info-usa.component';
import { InfoEuropeComponent } from './moreinfo/info-europe/info-europe.component';


@NgModule({
  declarations: [
    AppComponent,
    CarouselBasicComponent,
    AdminManagementComponent,
    HomeComponent,
    LoginComponent,
    OnlineformComponent,
    FormsubmitsuccessComponent,
    OnlineFormSubmissionManagementComponent,
    InfoAustraliaComponent,
    InfoCanadaComponent,
    InfoUkComponent,
    InfoNzComponent,
    InfoSgComponent,
    InfoMalaysiaComponent,
    InfoJapanComponent,
    InfoUsaComponent,
    InfoEuropeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //,NgbModule
    HttpClientModule,
   //HttpModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule ,
    FacebookModule.forRoot(),
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}

//platformBrowserDynamic().bootstrapModule(AppModule);
