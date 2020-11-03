import { HttpModule, Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

@Module({
  controllers: [CountryController],
  imports: [HttpModule],
  providers: [CountryService]
})
export class CountryModule {}
