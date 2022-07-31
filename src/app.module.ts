import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { DishModule } from './dish/dish.module';
import { OpeningHoursModule } from './opening-hours/opening-hours.module';
import { PurchaseOrderModule } from './purchase-order/purchase-order.module';

@Module({
  imports: [UserModule, RestaurantModule, DishModule, OpeningHoursModule, PurchaseOrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
