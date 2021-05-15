import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Country } from "../Model/country.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CountryService {
    constructor(private httpClient: HttpClient) { }

    getAllCountries(): Observable<Country[]>{
        return this.httpClient.get<Country[]>("https://restcountries.eu/rest/v2/all");
    }


    getCountryByName(name: String): Observable<Country[]> {
        return this.httpClient.get<Country[]>("https://restcountries.eu/rest/v2/name/" + name);
    }


}

