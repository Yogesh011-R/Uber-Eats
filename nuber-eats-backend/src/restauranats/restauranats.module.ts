import { Module, Query } from '@nestjs/common';
import { RestaurantResolver } from './restaurant.resolver';

@Module({
  providers: [RestaurantResolver],
})
export class RestauranatsModule {}
