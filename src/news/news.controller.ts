/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post, Body, Delete, Put, } from '@nestjs/common';
import { News, NewsService, NewsEdit } from './news.service';
import { CommentsService } from './comments/comments.service';
import { renderNewsAll } from '../views/news/news-all';
import { renderTemplate } from '../views/template';
import { renderNewsDetail } from '../views/news/news-detail';
import { CreateNewsDto } from './dtos/create-news-dto';

@Controller('/news')
export class NewsController {
  constructor(private readonly newsService: NewsService, private readonly commentsService: CommentsService) {}
  
  @Get('/api/all')
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
   
  @Get('/all')
  getAllView() {
    const news= this.newsService.allNews();
    const content = renderNewsAll(news)
    return renderTemplate(content, {title: "All News", description: "The most cool news available"});
  }
  @Get('/detail/:id')
  getDetailView(@Param('id') id: string) {
    const inInt = parseInt(id)
    const news= this.newsService.find(inInt);
    const comment = this.commentsService.find(inInt);
  
    const content = renderNewsDetail(news, comment)
    return renderTemplate(content, {title: news.title, description: news.description});
  }


  // @Get('/:id/details')
  // getTotalView(@Param('id') id: string): string {
  //   const idInt = parseInt(id);
  //   const news = this.newsService.find(idInt);
  //   const comments = this.commentsService.find(idInt)
  //   const content = renderNewsTotal(news, comments)
  //   return renderTemplate(content, { title: "Vsem privet", description: "Vsem poka" });
  // }


  // @Get('/api/:id')
  // get(@Param('id') id: string): News {
  //   const idInt = parseInt(id);
  //   const news = this.newsService.find(idInt);
  //   const comments = this.commentsService.find(idInt)
  //   return {
  //     ...news,
  //     comments,
  //   }
  // }
  
  @Post('/api')
  create(@Body() news: CreateNewsDto): string {
    const isCreated = this.newsService.create(news);
    return isCreated ? 'Vse dobavleno STATUS CODE: 200' : 'Proizoshla oshibka STATUS CODE: 500';
  }
  @Delete('/api/:id')
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

@Put('/api/:id')
edit(@Param('id') id: string, @Body() news: NewsEdit): News {
  const idInt = parseInt(id);
  return this.newsService.edit(idInt,news);
}
  


}
