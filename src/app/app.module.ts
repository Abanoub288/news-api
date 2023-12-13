import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { EgybusinessComponent } from './egypt/egybusiness/egybusiness.component';
import { EgysportComponent } from './egypt/egysport/egysport.component';
import { UsbusinessComponent } from './united states/usbusiness/usbusiness.component';
import { UsSportsComponent } from './united states/us-sports/us-sports.component';
import { HealthComponent } from './egypt/health/health.component';
import { EgytechnologyComponent } from './egypt/egytechnology/egytechnology.component';
import { EgyscienceComponent } from './egypt/egyscience/egyscience.component';
import { UshealthComponent } from './united states/ushealth/ushealth.component';
import { UstechnologyComponent } from './united states/ustechnology/ustechnology.component';
import { UsscienceComponent } from './united states/usscience/usscience.component';
import { FrbusinessComponent } from './france/frbusiness/frbusiness.component';
import { FrhealthComponent } from './france/frhealth/frhealth.component';
import { FrsportsComponent } from './france/frsports/frsports.component';
import { FrscinessComponent } from './france/frsciness/frsciness.component';
import { FrtechnologyComponent } from './france/frtechnology/frtechnology.component';
import { ItahealthComponent } from './italy/itahealth/itahealth.component';
import { ItasportsComponent } from './italy/itasports/itasports.component';
import { ItabusinessComponent } from './italy/itabusiness/itabusiness.component';
import { ItascienceComponent } from './italy/itascience/itascience.component';
import { ItatechnologyComponent } from './italy/itatechnology/itatechnology.component';
import { RusbusinessComponent } from './russia/rusbusiness/rusbusiness.component';
import { RushealthComponent } from './russia/rushealth/rushealth.component';
import { RusscienceComponent } from './russia/russcience/russcience.component';
import { RussportsComponent } from './russia/russports/russports.component';
import { RustechnologyComponent } from './russia/rustechnology/rustechnology.component';
import { JapbusinessComponent } from './japan/japbusiness/japbusiness.component';
import { JaphealthComponent } from './japan/japhealth/japhealth.component';
import { JapscienceComponent } from './japan/japscience/japscience.component';
import { JapsportsComponent } from './japan/japsports/japsports.component';
import { JaptechnologyComponent } from './japan/japtechnology/japtechnology.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EgybusinessComponent,
    EgysportComponent,
    UsbusinessComponent,
    UsSportsComponent,
    HealthComponent,
    EgytechnologyComponent,
    EgyscienceComponent,
    UshealthComponent,
    UstechnologyComponent,
    UsscienceComponent,
    FrbusinessComponent,
    FrhealthComponent,
    FrsportsComponent,
    FrscinessComponent,
    FrtechnologyComponent,
    ItahealthComponent,
    ItasportsComponent,
    ItabusinessComponent,
    ItascienceComponent,
    ItatechnologyComponent,
    RusbusinessComponent,
    RushealthComponent,
    RusscienceComponent,
    RussportsComponent,
    RustechnologyComponent,
    JapbusinessComponent,
    JaphealthComponent,
    JapscienceComponent,
    JapsportsComponent,
    JaptechnologyComponent,
    HomeComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
