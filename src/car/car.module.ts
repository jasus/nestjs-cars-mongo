import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { Car, CarSchema } from './entities/car.entity';

@Module({
  controllers: [CarController],
  providers: [CarService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Car.name,
        schema: CarSchema,
      },
    ]),
  ],
})
export class CarModule {}
