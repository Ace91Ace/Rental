import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard';
import { Vehicles } from './pages/vehicles/vehicles';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            }, 
            {
                path: 'vehicles',
                component: Vehicles
            },
            {
                path: 'Vehicles',
                component: Vehicles
            }
        ]
    }
];

getAllCars() {
  this.http.get<CarResponse>("https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars")
    .subscribe((res: CarResponse) => {
      console.log('API data:', res.data); // <-- Add this
      this.carList = res.data;
    });
}

