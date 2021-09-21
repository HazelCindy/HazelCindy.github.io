import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './landing-routing.module';
import { LandingComponent } from '../landing/landing.component';

@NgModule({
  declarations: [		
    LandingComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class LandingModule { }
