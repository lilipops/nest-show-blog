/* eslint-disable prettier/prettier */
import { News } from '../../news/news.service';
import { Comment } from '../../news/comments/comments.service';
export function renderNewsDetail(news: News, comment: Comment[]): string {
    return `
    <div class="container">
    <img style="width:500px;" src="${news.cover}" alt="" />
    <h1>${news.title}</h1>
    <div>${news.description}</div>
    <div class="text-muted">автор: ${news.author}</div>
    ${comment ? renderNewsComments(comment) : 'No comments'}
    </div>//n
    `;
} 
//hola yayyyy i haven't forgot to update the comment count yayyyyy !!!!
// yay i havent forget today alsoo d
function renderNewsComments(comments: Comment[]): string {
    let html = '';
    for( const comment of comments) {
        html +=  `
    <div class="row">
        <div class="col-lg-1">
            <div style="background: #ccc; width: 75px; height: 75px;" class="rounded-lg"></div>
        </div>
        <div class="col-lg-8">
            <div>${comment.author}</div>
            <div>${comment.message}</div>

        </div>
    </div>
    `;
    }
    

    return html
} 

// 18  rem class card width  

