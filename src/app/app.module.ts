import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { HowToWorkComponent } from './how-to-work/how-to-work.component';
import { CarsComponent } from './cars/cars.component';
import { FormsModule } from '@angular/forms';
import { MostPopularCarsComponent } from './most-popular-cars/most-popular-cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChooseUsComponent,
    HowToWorkComponent,
    CarsComponent,
    MostPopularCarsComponent,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
