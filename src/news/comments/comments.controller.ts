/* eslint-disable prettier/prettier */
import { Controller, Post, Param, Body, Get, Delete, Put } from '@nestjs/common';
import { CommentsService } from './comments.service'
import { Comment } from './comments.service'


@Controller('comments')
export class CommentsController {
    constructor(private readonly commentsService: CommentsService) {}
    @Post('/api/:idNews') 
    create(@Param('idNews') idNews: string, @Body() comment: Comment ) {
        const idNewsInt = parseInt(idNews)
        console.log(idNewsInt)
        console.log(comment)
        return this.commentsService.create(idNewsInt, comment)
    }
    @Get('/api/details/:idNews') 
    get(@Param('idNews') idNews: string) {
        const idNewsInt = parseInt(idNews)
        const comments =  this.commentsService.find(idNewsInt)
        console.log(comments)
    }
    @Delete('/api/details/:idNews/:idComment') 
    remove(
        @Param('idNews') idNews: string, 
        @Param('idComment') idComment: string,
        ) {
        const idNewsInt = parseInt(idNews)
        const idCommentsInt = parseInt(idComment)
        return this.commentsService.remove(idNewsInt, idCommentsInt) 
      
    }
    @Put('/api/details/:idNews/:idComment') 
    edit(
        @Param('idNews') idNews: string, 
        @Param('idComment') idComment: string,
        @Body() comment: Comment,
    ) {
        const idInt = parseInt(idNews)
        const idCommentsInt = parseInt(idComment)
        return this.commentsService.edit(idInt, idCommentsInt, comment)
    }
}
