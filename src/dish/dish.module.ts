import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dish } from './entities/dish.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dish])],
  exports: [TypeOrmModule, DishService],
  providers: [DishService],
})
export class DishModule {}
