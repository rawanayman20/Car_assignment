import { Component, OnInit } from '@angular/core';
import { GetAllCarsService } from '../get-all-cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  ngOnInit(): void {
   this.carId=this._ActivedRoute.snapshot.params['id']
   if(this.carId){
this.getCarById(this.carId)
   }
  }
carDetails: any = null;
  carId:number=0
constructor(private CarDetailsService:GetAllCarsService,private _ActivedRoute:ActivatedRoute){

}
getCarById(id:number){
   this.CarDetailsService.getCarById(id).subscribe({next:(res:any)=>{
     this.carDetails=res.Car
     console.log("hi",this.carDetails)
      
    }, error:(err)=>{
      console.log(err)
    }, complete:()=>{
      console.log("Done")
    }})
   
  }
 
  

}
