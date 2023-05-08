/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Delete, } from '@nestjs/common';
import { News, NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get('/:id')
  get(@Param('id') id: string): News {
    const idInt = parseInt(id);
    return this.newsService.find(idInt);
  }

  @Get()
  findAll(): string {
    return this.newsService.findAll();
  }
  
  @Post()
  create(@Body() news: News): string {
    const isCreated = this.newsService.create(news);
    return isCreated ? 'Vse dobavleno STATUS CODE: 200' : 'Proizoshla oshibka STATUS CODE: 500';
  }
  @Delete('/:id')
  remove(@Param('id') id: string): string {
    const idInt = parseInt(id);
    const isRemoved = this.newsService.remove(idInt);
    return isRemoved ? 'Novost udalena' : 'Peredan neverniy ID';
  }
}
// const error = new Error("message")
// error.code = "YOUR_STATUS_CODE"
// throw error;