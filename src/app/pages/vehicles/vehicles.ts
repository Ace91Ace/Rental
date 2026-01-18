import { Component, inject, OnInit } from '@angular/core';
import { CarModel, CarResponse } from '../../model/car';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicles',
  imports: [FormsModule],
  templateUrl: './vehicles.html',
  styleUrl: './vehicles.css',
})
export class Vehicles implements OnInit {
  newCarObj: CarModel;
  http= inject(HttpClient);
  carList: CarModel[] = [];

  constructor() {
    this.newCarObj = new CarModel();
  }

  ngOnInit(): void {
    this.getAllCars();
  }

  getAllCars() {
    this.http.get<CarResponse>("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars").subscribe((res: CarResponse) => {
      debugger;
      this.carList = res.data;
    });
  }

  onSaveCar() {
    debugger;
    this.http.post<CarResponse>("https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar", this.newCarObj).subscribe((res: CarResponse) => {
      debugger;
      if (res.result) {
        alert('Car saved successfully!');
        this.newCarObj = new CarModel(); // Reset the form
      } else {
        alert('Failed to save car: ' + res.message);
      }
    });
  }
}
