import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCountryComponent } from './Components/card-country/card-country.component';
import { CountryDetailsComponent } from './Components/country-details/country-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/countries', pathMatch: 'full'},
  { path: 'countries', component: CardCountryComponent },
  { path: 'country/:name', component: CountryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
