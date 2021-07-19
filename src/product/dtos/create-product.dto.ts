import { IsArray, IsDecimal, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDecimal()
  @IsNotEmpty()
  quantity: number;

  @IsDecimal()
  @IsNotEmpty()
  price: number;

  @IsArray()
  @IsNotEmpty()
  tags: string[];

  @IsArray()
  @IsNotEmpty()
  categories: string[];
}
