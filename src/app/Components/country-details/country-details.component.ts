import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/Model/country.model';
import { CountryService } from 'src/app/Services/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.getCountryByName("eest");
  }

  getCountryByName(name: String) {
    return this.countryService.getCountryByName(name).subscribe((data: Country[]) => {
      this.country = data;
    })
  }

}
