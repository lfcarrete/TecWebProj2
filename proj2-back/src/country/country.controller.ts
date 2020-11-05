import { Controller, Param } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Country } from './country.model';
import { CountryService } from './country.service';
import { CountrySearch } from './countrySearch.model';

@Controller('country')
export class CountryController {
    constructor(
        private countryService : CountryService
    ) {}
    @Get()
    getAll(){
        return "OII";
    }
    
    @Get("/fetchData")
    fetchData() : Promise<Country[]>  {
        return this.countryService.fetchData();
    }

    @Get("/searchCountry/:country")
    searchCountry(@Param('country') country: String): Promise<CountrySearch> {
        var d = new Date();
        var date = '2020-6-01';
        
        return this.countryService.searchCountry(country, date);
    }

}
