import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Restaurant } from './entities/restauranat.entity';

@Resolver()
export class RestaurantResolver {
  @Query(returns => [Restaurant])
  restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[] {
    console.log(
      '🚀 ~ file: restaurant.resolver.ts ~ line 8 ~ RestaurantResolver ~ restaurants ~ veganOnly',
      veganOnly
    );
    return [];
  }
  @Mutation(returns => Restaurant)
  createRestaurant(@Args('name') name: string): Restaurant {
    return {
      name,
    };
  }
}
