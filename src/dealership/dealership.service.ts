import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDealershipDto } from './dto/create-dealership.dto';
import { UpdateDealershipDto } from './dto/update-dealership.dto';
import { Dealership } from './entities/dealership.entity';

@Injectable()
export class DealershipService {
  constructor(
    @InjectModel(Dealership.name)
    private readonly dealerShipModel: Model<Dealership>,
  ) {}

  async create(createDealershipDto: CreateDealershipDto) {
    const dealer = new this.dealerShipModel({
      ...createDealershipDto,
    });
    await dealer.populate('cars');

    return dealer.save();
  }

  findAll() {
    return this.dealerShipModel.find().populate('cars');
  }

  findOne(id: number) {
    return `This action returns a #${id} dealership`;
  }

  update(id: number, updateDealershipDto: UpdateDealershipDto) {
    return `This action updates a #${id} dealership`;
  }

  remove(id: number) {
    return `This action removes a #${id} dealership`;
  }
}
