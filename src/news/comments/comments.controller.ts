/* eslint-disable prettier/prettier */
import { Controller, Post } from '@nestjs/common';
import { CommentsService } from './comments.service'
@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}
    @Post('/:idNews') 
    create(@Param('idNews') idNews: number, comment: Comment ) {
        
    }
}
