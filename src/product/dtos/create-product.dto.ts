import { IsDecimal, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsDecimal()
  quantity: number;

  @IsDecimal()
  price: number;
}
