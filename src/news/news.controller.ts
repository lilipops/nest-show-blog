/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { News, NewsService, NewsEdit } from './news.service';

@Controller('/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}
  
  @Get('/all')
  allNews() {
    if(this.newsService.allNews().length === 0) {
        return {
            message: "No news available",
            status: 200,
            news: []
        } 
    } else {
        return {
            message: "All news available",
            status: 200,
            news: this.newsService.allNews()
        }
    }
  }

  // second method to get all news

  // @Get('/all')
  // getAll(): News[] {
  //   return this.newsService.getAll() 
  // }

  @Get('/:id')
  get(@Param('id') id: string): News {
    const idInt = parseInt(id);
    return this.newsService.find(idInt);
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

//   @Put('/:id')
// updateNews(@Param('id') id: string, @Body() news: News) {
//   const updatedNews = this.newsService.updateNews(+id, news);
//   return updatedNews ? 'News were updated successfully' : 'Could not update';
// }

// Second version of updating News

@Put('/:id')
edit(@Param('id') id: string, @Body() news: NewsEdit): News {
  const idInt = parseInt(id);
  return this.newsService.edit(idInt,news);
}
  


}
