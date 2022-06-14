const { InputType, Field } = require('@nestjs/graphql');

@InputType()
export class CreateRestaurantDto {
  @Field(type => String)
  name: string;

  @Field(type => String)
  address: string;

  @Field(type => String)
  ownerName: string;
}
