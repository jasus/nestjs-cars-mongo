import { Module } from '@nestjs/common';
import { DealershipService } from './dealership.service';
import { DealershipController } from './dealership.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Dealership, DealerShipSchema } from './entities/dealership.entity';

@Module({
  controllers: [DealershipController],
  providers: [DealershipService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Dealership.name,
        schema: DealerShipSchema,
      },
    ]),
  ],
})
export class DealershipModule {}
