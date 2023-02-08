import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Car extends Document {
  @Prop({
    required: true,
  })
  brand: string;

  @Prop({
    required: true,
    unique: true,
    index: true,
  })
  model: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
