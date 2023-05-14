/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
export type Comment = {
    id?: number;
    message: string;
    author: string;
    idNews: number;
}
@Injectable()
export class CommentsService {
    private readonly comments = {};

    create(idNews: number, comment: Comment) { }
}
