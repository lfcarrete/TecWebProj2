import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common';
import axios from 'axios'
import { Country } from './country.model';
import { CountrySearch } from './countrySearch.model';

@Injectable()
export class CountryService {
  constructor(private httpService: HttpService) { }

  private countries: Country[];

  private countrySearch : CountrySearch;


  async fetchData(): Promise<Country[]> {

    this.countries = [];

    await axios({
      "method": "GET",
      "url": "https://covid-19-data.p.rapidapi.com/help/countries",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "1079acb176msh97a06a83fa3f363p17bca8jsn174a508a167a",
        "useQueryString": true
      }, "params": {
        "format": "json"
      }
    })
      .then((response) => {
        response.data.map(country => {
          let newcountry : Country = {
            name: country["name"],
            alpha2code: country["alpha2code"],
            alpha3code: country["alpha3code"],
            latitude: country["latitude"],
            longitude: country['longitude'],
          }
          console.log(newcountry);
          this.countries.push(newcountry);
        });
      })
      .catch((error) => {
        console.log(error)
      })
    return await this.countries;
  }

  async searchCountry(country: String, date: String): Promise<CountrySearch> {
    this.countrySearch = null;

    await axios({
      "method": 'GET',
      "url": 'https://rapidapi.p.rapidapi.com/report/country/name',
      "params": { "date": date, "name": country },
      "headers": {
        'x-rapidapi-key': '1079acb176msh97a06a83fa3f363p17bca8jsn174a508a167a',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
      }
    })
      .then((response) => {
        response.data.map(country => {
          let newcountry : CountrySearch = {
            country: country["country"],
            provinces: [
              {
                province: country["provinces"][0]["province"],
                confirmed: country["provinces"][0]["confirmed"],
                recovered: country["provinces"][0]["recovered"],
                deaths: country["provinces"][0]["deaths"],
                active: country["provinces"][0]["active"],
              }
            ],
            latitude: country["latitude"],
            longitude: country["longitude"],
            date: country["date"],
          };
          console.log(newcountry);
          this.countrySearch = newcountry;
        });
      })
      .catch((error) => {
        console.log(error)
      })
      return this.countrySearch;

  }
}


 