import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllCarsService {

  constructor(private _HttpClient:HttpClient) {}
  GetCars():Observable<any>{
    return this._HttpClient.get('https://myfakeapi.com/api/cars')

  }
  getCarById(id:number){
    return  this._HttpClient.get(`https://myfakeapi.com/api/cars/${id}`)
  }
}
