import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardCountryComponent } from './Components/card-country/card-country.component';
import { FilterPipe } from './Pipes/filter-region.pipe';
import { SearchPipe } from './Pipes/search.pipe';
import { FilterLanguagesPipe } from './Pipes/filter-languages.pipe';
import { FilterTimezonePipe } from './Pipes/filter-timezone.pipe';
import { FilterCurrenciesPipe } from './Pipes/filter-currencies.pipe';
import { CountryDetailsComponent } from './Components/country-details/country-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CardCountryComponent,
    FilterPipe,
    SearchPipe,
    FilterLanguagesPipe,
    FilterTimezonePipe,
    FilterCurrenciesPipe,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
