import { Module } from '@nestjs/common';
import { OpeningHoursService } from './opening-hours.service';
import { OpeningHoursController } from './opening-hours.controller';

@Module({
  controllers: [OpeningHoursController],
  providers: [OpeningHoursService]
})
export class OpeningHoursModule {}
