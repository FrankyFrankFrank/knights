import { Injectable } from '@nestjs/common';
import { Knight } from './Knight.interface';

@Injectable()
export class KnightsService {
  private readonly knights: Knight[] = [];

  create(knight: Knight) {
    this.knights.push(knight);
  }

  findAll(): Knight[] {
    return this.knights;
  }

  findOne(id: number): Knight {
    return this.knights.find((knight) => knight.id === id);
  }
}
