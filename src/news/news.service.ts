/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Comment } from './comments/comments.service';

export interface News {
  id?: number;
  title: string;
  description: string;
  author: string;
  countView?: number;
  cover?: string;
  comments?: Comment[];
}
export interface NewsEdit {
  title?: string;
  description?: string;
  author?: string;
  countView?: number;
  cover?: string;

}
export function getRandomInt(min = 1, max = 9999): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomString(length : number) : string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

@Injectable()
export class NewsService {
    length: number;
   
    allNews(): News[]{
        return this.news
    }
    // getAll(): News[]{
    //   return this.news
    // }
  
  
  private readonly news: News[] = [
    {
      id: 1,
      title: 'Our first news',
      description: 'Yesss!! Our first news',
      author: 'Nikita',
      countView: 12,
      cover: 'https://static.scientificamerican.com/sciam/cache/file/32665E6F-8D90-4567-9769D59E11DB7F26_source.jpg'
    },
 
    
  ];

  create(news: News): News {
    const countView = getRandomInt(0, 99999);
    const title = getRandomString(6)
    const description = getRandomString(25)
    const author = getRandomString(6)
    const finalNews = {
        ...news, 
        title: title,
        description: description,
        author: author,
        countView: countView,
    }
    this.news.push(finalNews);
    return finalNews;
  }
  find(id: News['id']): News | undefined {
    
    return this.news.find((news: News) => news.id === id);

  }
  remove(id: News['id']): boolean {
    const indexRemoveNews = this.news.findIndex((news: News) => news.id === id);
    if (indexRemoveNews !== -1) {
      this.news.splice(indexRemoveNews, 1);
      return true;
    }
    return false;
  }
  edit(id: number, news: NewsEdit): News | undefined { 
    const indexEditableNews = this.news.findIndex((news) => news.id === id);
    if(indexEditableNews !== -1) {
      this.news[indexEditableNews] = {
        ...this.news[indexEditableNews],
        ...news,
      }
      return this.news[indexEditableNews]
    }
    return undefined
  }
}
