import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChooseUsComponent } from './choose-us/choose-us.component';
import { MostPopularCarsComponent } from './most-popular-cars/most-popular-cars.component';
import { HowToWorkComponent } from './how-to-work/how-to-work.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:"Home",component:HomeComponent},{path:"Why_choose_us",component:ChooseUsComponent},{path:"POPULAR_RENTAL_DEALS",component:MostPopularCarsComponent},{path:"HOW_IT_WORK",component:HowToWorkComponent}, { path: 'car/:id', component: CarDetailsComponent },{path:"Become_a_renter",component:CarsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
