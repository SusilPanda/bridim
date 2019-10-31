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

@NgModule({
  declarations: [
    AppComponent,
    CarouselBasicComponent,
    AdminManagementComponent
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
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
