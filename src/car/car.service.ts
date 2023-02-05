import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
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

  async findAll() {
    const cars = await this.carModel.find().exec();
    return cars;
  }

  async findOne(id: string) {
    let car = null;

    if (isValidObjectId(id)) {
      car = await this.carModel.findById(id);
    }

    if (car === null) {
      throw new NotFoundException(`Car with id '${id}' not found`);
    }

    return car;
  }

  async update(id: string, updateCarDto: UpdateCarDto) {
    const car: Car = await this.findOne(id);

    try {
      await car.updateOne(updateCarDto);

      return { ...car.toJSON(), ...updateCarDto };
    } catch (error) {
      throw new InternalServerErrorException(
        `Car can not be updated - Check server logs ${JSON.stringify(error)}`,
      );
    }
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
