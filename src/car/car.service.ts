import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car.name)
    private readonly carModel: Model<Car>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    try {
      const car = await this.carModel.create(createCarDto);

      return car;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `Car exists in db ${JSON.stringify(error.keyValue)}`,
        );
      }

      throw new InternalServerErrorException(
        `Car can not be created - Check server logs ${JSON.stringify(error)}`,
      );
    }
  }

  findAll() {
    return `This action returns all car`;
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
