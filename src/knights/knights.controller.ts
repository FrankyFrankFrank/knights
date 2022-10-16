import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('knights')
export class KnightsController {
  @Post()
  create(): string {
    return 'This action adds a new knight';
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
