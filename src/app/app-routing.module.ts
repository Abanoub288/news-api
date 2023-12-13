import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgybusinessComponent } from './egypt/egybusiness/egybusiness.component';
import { EgysportComponent } from './egypt/egysport/egysport.component';
import { UsSportsComponent } from './united states/us-sports/us-sports.component';
import { UsbusinessComponent } from './united states/usbusiness/usbusiness.component';
import { HealthComponent } from './egypt/health/health.component';
import { EgytechnologyComponent } from './egypt/egytechnology/egytechnology.component';
import { EgyscienceComponent } from './egypt/egyscience/egyscience.component';
import { UstechnologyComponent } from './united states/ustechnology/ustechnology.component';
import { UshealthComponent } from './united states/ushealth/ushealth.component';
import { UsscienceComponent } from './united states/usscience/usscience.component';
import { FrbusinessComponent } from './france/frbusiness/frbusiness.component';
import { FrhealthComponent } from './france/frhealth/frhealth.component';
import { FrscinessComponent } from './france/frsciness/frsciness.component';
import { FrsportsComponent } from './france/frsports/frsports.component';
import { FrtechnologyComponent } from './france/frtechnology/frtechnology.component';
import { ItabusinessComponent } from './italy/itabusiness/itabusiness.component';
import { ItahealthComponent } from './italy/itahealth/itahealth.component';
import { ItascienceComponent } from './italy/itascience/itascience.component';
import { ItasportsComponent } from './italy/itasports/itasports.component';
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


const routes: Routes = [
  { path: '', redirectTo:'homeNews' , pathMatch:'full'},
  {path:'homeNews' , component:HomeComponent},
  {path:'egybusiness' , component:EgybusinessComponent},
  {path:'egyscience' , component:EgyscienceComponent},
  {path:'egysport' , component:EgysportComponent},
  { path:'health' , component:HealthComponent},
  {path:'technology' , component:EgytechnologyComponent},
  {path:'usSports' , component:UsSportsComponent},
  {path:'usbusiness' , component:UsbusinessComponent},
  {path:'ustechnology' , component:UstechnologyComponent},
  {path:'ushealth' , component:UshealthComponent},
  {path:'usscinence' , component:UsscienceComponent},

  {path:'frbusiness' , component:FrbusinessComponent},
  {path:'frhealth' , component:FrhealthComponent},
  {path:'frsciness' , component:FrscinessComponent},
  {path:'frsports' , component:FrsportsComponent},
  {path:'frtechnology' , component:FrtechnologyComponent},

  {path:'itabusiness' , component:ItabusinessComponent},
  {path:'itahealth' , component:ItahealthComponent},
  {path:'itascience' , component:ItascienceComponent},
  {path:'itasports' , component:ItasportsComponent},
  {path:'itatechnology' , component:ItatechnologyComponent},

  {path:'rusbusiness' , component:RusbusinessComponent},
  {path:'rushealth' , component:RushealthComponent},
  {path:'russcience' , component:RusscienceComponent},
  {path:'russports' , component:RussportsComponent},
  {path:'rustechnology' , component:RustechnologyComponent},

  {path:'japbusiness' , component:JapbusinessComponent},
  {path:'japhealth' , component:JaphealthComponent},
  {path:'japscience' , component:JapscienceComponent},
  {path:'japsports' , component:JapsportsComponent},
  {path:'japtechnology' , component:JaptechnologyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
