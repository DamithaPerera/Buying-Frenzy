import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpeningHoursService } from './opening-hours.service';
import { CreateOpeningHourDto } from './dto/create-opening-hour.dto';
import { UpdateOpeningHourDto } from './dto/update-opening-hour.dto';

@Controller('opening-hours')
export class OpeningHoursController {
  constructor(private readonly openingHoursService: OpeningHoursService) {}

  @Post()
  create(@Body() createOpeningHourDto: CreateOpeningHourDto) {
    return this.openingHoursService.create(createOpeningHourDto);
  }

  @Get()
  findAll() {
    return this.openingHoursService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.openingHoursService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOpeningHourDto: UpdateOpeningHourDto) {
    return this.openingHoursService.update(+id, updateOpeningHourDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.openingHoursService.remove(+id);
  }
}
