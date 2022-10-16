import { Body, Controller, Get, Param, Post } from '@nestjs/common';

export class CreateKnightDto {
  name: string;
  age: number;
  house: string;
}

@Controller('knights')
export class KnightsController {
  @Post()
  async create(@Body() createKnightDto: CreateKnightDto) {
    return 'This action adds a new knight named ' + createKnightDto.name;
  }

  @Get()
  findAll(@Body() body): string {
    return 'This action returns all knights';
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `This action returns a #${params.id} knight`;
  }
}
