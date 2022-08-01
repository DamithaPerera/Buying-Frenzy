import { Module } from '@nestjs/common';
import { Seeder } from './seeder';
import { HttpModule } from '@nestjs/axios';
import { SeederController } from './seeder.controller';

@Module({
  imports: [HttpModule],
  controllers: [SeederController],
  providers: [Seeder],
})
export class SeederModule {}
