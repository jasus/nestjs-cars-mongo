import { Type } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';
import { Car } from 'src/car/entities/car.entity';

export class CreateDealershipDto {
  @IsString()
  readonly name: string;

  @IsArray()
  @Type(() => Car)
  readonly cars: Car[];
}
