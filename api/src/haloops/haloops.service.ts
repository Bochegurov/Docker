import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HaloopEntity } from './entities/haloop.entity';

@Injectable()
export class HaloopsService {
  constructor(
    @InjectRepository(HaloopEntity)
    private haloopsRepository: Repository<HaloopEntity>,
  ) {}

  findAll(): Promise<HaloopEntity[]> {
    return this.haloopsRepository.find();
  }
}
