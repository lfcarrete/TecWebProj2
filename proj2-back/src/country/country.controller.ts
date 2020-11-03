import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
    constructor(
        private countryService : CountryService
    ) {}
    @Get()
    getAll(){
        return "Hello World"
    }
    
    @Get("/fetchData")
    fetchData()  {
        return this.countryService.fetchData();
    }

}
