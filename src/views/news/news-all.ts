/* eslint-disable prettier/prettier */
import { News } from '../../news/news.service';

export function renderNewsAll(news: News[]) {
    let newsListHtml = '';
    for( const newsItem of news) {
        newsListHtml += renderNewsBlock(newsItem);
    }
    return `<h1>Spisok novostey</h1>
   
    <div class="row">
    ${newsListHtml}  
    </div>
    
    `;
} 

// 18  rem class card width  

function renderNewsBlock(news: News) {
    return `
    <div class="col-lg-4 mb-2">
    <div class="card" style="width: 100%;"> 
    ${
        news.cover ? `<img src="${news.cover}" style="height: 200px;object-fit: cover;" class="card-img-top" alt="...">` : ''
    }
  
  <div class="card-body">
    <h5 class="card-title">${news.title} </h5>
    <h6 class="card-subtitle mb-2 text-muted">${news.author}</h6>
    <p class="card-text">${news.description}</p>
    <a href="http://localhost:3000/news/${news.id}/details" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>`;
}