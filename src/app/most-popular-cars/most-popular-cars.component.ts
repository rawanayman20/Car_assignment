import { Component, OnInit } from '@angular/core';
import { GetAllCarsService } from '../get-all-cars.service';
import { Cars } from '../cars';

@Component({
  selector: 'app-most-popular-cars',
  templateUrl: './most-popular-cars.component.html',
  styleUrls: ['./most-popular-cars.component.css']
})
export class MostPopularCarsComponent implements OnInit {
  ListOfCars: Cars[] = [];
  filteredCars: Cars[] = [];
  paginatedCars: Cars[] = [];

  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 12;
  totalPages: number = 0;
  constructor(private CarsService:GetAllCarsService)
{

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
      error: (err) => console.error(err)
    });
  }

  applyFilter() {
    const term = this.searchTerm.toLowerCase();
    this.filteredCars = this.ListOfCars.filter(car =>
      car.car.toLowerCase().includes(term) ||
      car.car_model.toLowerCase().includes(term) ||
      car.car_color.toLowerCase().includes(term)
    );
    this.totalPages = Math.ceil(this.filteredCars.length / this.itemsPerPage);
    this.setPaginatedCars();
  }

  setPaginatedCars() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedCars = this.filteredCars.slice(start, end);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.setPaginatedCars();
    }
  }

  onSearchChange() {
    this.currentPage = 1;
    this.applyFilter();
  }
}
