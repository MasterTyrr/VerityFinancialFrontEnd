import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { WhyVerityComponent } from './components/why-verity/why-verity.component';
import { OurExperienceComponent } from './components/our-experience/our-experience.component';
import { HowWeInvestComponent } from './components/how-we-invest/how-we-invest.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    WhyVerityComponent,
    OurExperienceComponent,
    HowWeInvestComponent,
    ContactUsComponent
  ],
  imports: [
    RouterModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
