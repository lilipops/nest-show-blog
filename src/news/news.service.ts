import { Injectable } from '@nestjs/common';

export interface News {
  id: number;
  title: string;
  description: string;
  author: string;
  countView?: number;
}
@Injectable()
export class NewsService {
  private readonly news: News[] = [
    {
      id: 1,
      title: 'Our first news',
      description: 'Yesss!! Our first news',
      author: 'Nikita',
      countView: 12,
    },
  ];

  create(news: News): News {
    this.news.push(news);
    return news;
  }
  find(id: News['id']): News | undefined {
    return this.news.find((news: News) => news.id === id);
  }
}
