/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { getRandomInt } from '../news.service';
export type Comment = {
    id?: number;
    message: string;
    author: string;
}

export type CommentEdit = {
    id?: number;
    message?: string;
    author?: string;
}
@Injectable()
export class CommentsService {
    private readonly comments = {
    };
    //kkkl

    create(idNews: number, comment: Comment) { 
        if (!this.comments[idNews]) {
            this.comments[idNews] = [];
        }
        this.comments[idNews].push({ ...comment, id: getRandomInt()});
        return "The comment has been created";
    }
    edit(idNews: number, idComment: number, comment: CommentEdit) { 
        const indexComment = this.comments[idNews].findIndex((c) => c.id === idComment) === -1
        if (!this.comments[idNews] || indexComment) {
           return false
        }
      
        this.comments[idNews][indexComment] = {
            ...this.comments[idNews][indexComment],
            comment,
        }
        return "The comment has been created";
    }
    find(idNews: number): Comment[] | undefined {
        return this.comments[idNews] || undefined;
    }
    remove(idNews: number, idComment: number): Comment[] | null {
        if(!this.comments[idNews] ) {
            return null
        }
        const indexComment = this.comments[idNews].findIndex((c) => c.id === idComment)
        console.log(indexComment + ' index comment ')
        if (indexComment === -1) {
            return null;
        }
        return this.comments[idNews].splice(indexComment, 1);
    }
     
    // edit(idNews: number, idComment: number, comment: Comment): Comment | null {
    //     const comments = this.comments[idNews];
    //     if (!comments) {
    //         return null;
    //     }
      
    //     const indexEditableComment = comments.findIndex((c) => c.id === idComment);
    //     if (indexEditableComment === -1) {
    //         return null;
    //     }
      
    //     const updatedComment = {
    //         ...comments[indexEditableComment],
    //         ...comment,
    //         id: idComment,
    //     };
      
    //     comments[indexEditableComment] = updatedComment;
      
    //     return updatedComment;
    // }
    
}
