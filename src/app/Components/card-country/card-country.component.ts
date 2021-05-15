import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/Model/country.model';
import { CountryService } from 'src/app/Services/country.service';

@Component({
  selector: 'app-card-country',
  templateUrl: './card-country.component.html',
  styleUrls: ['./card-country.component.css']
})
export class CardCountryComponent implements OnInit {

  filterCurrency = '';
  filterTime = '';
  filterReg = '';
  filterLang = '';
  searchText = '';
  country: Country[] = [];
  allCountries: Country[] = [];
  searchableList = ['name', 'capital', 'alpha2Code']

  constructor(private countryService: CountryService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    return this.countryService.getAllCountries().subscribe((data: Country[]) => {
      this.allCountries = data;
    })
  }

  onClickCard(name: String) {
    this.router.navigate(['/country/' + name]);
  }
}