import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateKnightDto } from './CreateKnight.dto';
import { Knight } from './Knight.interface';
import { KnightsService } from './knights.service';
@Controller('knights')
export class KnightsController {
  constructor(private knightsService: KnightsService) {}

  @Post()
  async create(@Body() createKnightDto: CreateKnightDto) {
    const newKnight: Knight = {
      id: this.knightsService.findAll().length + 1,
      name: createKnightDto.name,
      age: createKnightDto.age,
      house: createKnightDto.house,
    };
    this.knightsService.create(newKnight);
  }

  @Get()
  findAll(): Knight[] {
    return this.knightsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Knight {
    return this.knightsService.findOne(params.id);
  }
}
