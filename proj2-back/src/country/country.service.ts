import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common';
import axios from 'axios'
import { Country } from './country.model';

@Injectable()
export class CountryService {
    constructor(private httpService: HttpService) {}

    private countries: Country[];
    

    async fetchData() : Promise<Country[]> {

      this.countries = [];

        await axios({
            "method":"GET",
            "url":"https://covid-19-data.p.rapidapi.com/help/countries",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":"1079acb176msh97a06a83fa3f363p17bca8jsn174a508a167a",
            "useQueryString":true
            },"params":{
            "format":"json"
            }
            })
            .then((response)=>{
              response.data.map(country => {
                let newcountry = {
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
            .catch((error)=>{
              console.log(error)
            })
            return await this.countries;
     }
}
