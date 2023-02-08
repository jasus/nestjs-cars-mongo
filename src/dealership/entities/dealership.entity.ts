import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Car } from 'src/car/entities/car.entity';

@Schema()
export class Dealership extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Car.name }] })
  cars: [Car];
}

export const DealerShipSchema = SchemaFactory.createForClass(Dealership);
