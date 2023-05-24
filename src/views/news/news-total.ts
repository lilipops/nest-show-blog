/* eslint-disable prettier/prettier */
import { News } from '../../news/news.service';
import { Comment } from '../../news/comments/comments.service';


export function renderNewsTotal(news: News, comments: Comment[]) {
    let commentsListHtml = '';
    
    if (comments && typeof comments[Symbol.iterator] === 'function') {
        for (const comment of comments) {
            console.log(comment);
            commentsListHtml += renderCommentsBlock(comment);
        }
    } else {
        console.error('Comments is not iterable');
    }
    
    return `
    <h1>вся информация о новости</h1>
    <div class="col-lg-4 mb-2">
        <div class="card" style="width: 100%;"> 
            ${
                news.cover ? `<img src="${news.cover}" style="height: 200px;object-fit: cover;" class="card-img-top" alt="...">` : ''
            }
            <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${news.author}</h6>
                <p class="card-text">${news.description}</p>
            </div>
        </div>
    </div>
    <div class="row mb-2" col-lg-4 card>
        ${commentsListHtml}  
    </div>`;
}


// changed also this 
// 18  rem class card width  

function renderCommentsBlock(comment: Comment) {
    return `
    
  <a href="#" class="list-group-item list-group-item-action active mb-2" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${comment.author}</h5>
      <small>${comment.id}</small>
    </div>
    <p class="mb-1">${comment.message}</p>
    <small>comments from Nikita Gurskiy -) </small>
  </a>
  `;
}