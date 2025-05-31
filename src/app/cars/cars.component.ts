import { Component, OnInit } from '@angular/core';
import { Cars } from '../cars';
import { GetAllCarsService } from '../get-all-cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
  ListOfCars:Cars[]=[]
  filteredCars: Cars[] = [];
  visibleCars: Cars[] = [];

  searchTerm: string = '';
  showCount: number = 4;
  constructor(private CarsService:GetAllCarsService){
  
}
ngOnInit(): void {
 this.GetAllCars()
}

GetAllCars() {
    this.CarsService.GetCars().subscribe({
      next: (res: any) => {
        this.ListOfCars = res.cars;
        this.applyFilter();
      },
      error: (err) => console.error(err),
      complete: () => console.log("Done")
    });
  }

  applyFilter() {
    const term = this.searchTerm.toLowerCase();
    this.filteredCars = this.ListOfCars.filter(car =>
      car.car.toLowerCase().includes(term) ||
      car.car_model.toLowerCase().includes(term) ||
      car.car_color.toLowerCase().includes(term)
    );
    this.updateVisibleCars();
  }

  updateVisibleCars() {
    this.visibleCars = this.filteredCars.slice(0, this.showCount);
  }

  showMore() {
    this.showCount += 4;
    this.updateVisibleCars();
  }

  onSearchChange() {
    this.showCount = 4;
    this.applyFilter();
  }

}
