import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { DishModule } from './dish/dish.module';
import { OpeningHoursModule } from './opening-hours/opening-hours.module';
import { PurchaseOrderModule } from './purchase-order/purchase-order.module';
import { SeederModule } from './seeder/seeder.module';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from './config/ormconfig';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    HttpModule,
    ConfigModule.forRoot(),
    UserModule,
    RestaurantModule,
    DishModule,
    OpeningHoursModule,
    PurchaseOrderModule,
    SeederModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
