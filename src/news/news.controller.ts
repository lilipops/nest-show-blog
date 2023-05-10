/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { News, NewsService } from './news.service';

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

  @Get('/:id')
  get(@Param('id') id: string): News {
    const idInt = parseInt(id);
    return this.newsService.find(idInt);
  }

//   @Get('/all')
//   findAll(): string{
//     return this.newsService.findAll();
//     // if(this.newsService.length === 0) {
//     //     return {
//     //         message: 'No news available',
//     //         news: [],
//     //         status: 200,
//     //     }
//     // } else {
//     //     return {
//     //         massage: "all works",
//     //         news : this.newsService,
//     //         status: 200,
//     //     }
//     // }
//   }
  
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

  @Put('/:id')
updateNews(@Param('id') id: string, @Body() news: News) {
  const updatedNews = this.newsService.updateNews(+id, news);
  return updatedNews ? 'News were updated successfully' : 'Could not update';
}

  


}
