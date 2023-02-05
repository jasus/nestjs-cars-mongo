import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-cars'),
    CarModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
