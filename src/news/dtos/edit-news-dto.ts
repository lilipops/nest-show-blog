/* eslint-disable prettier/prettier */
import { IsString, IsNumber } from 'class-validator';

export class CreateNewsDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    author: string;

    @IsNumber()
    countView?: number;

    @IsString()
    cover?: string;
}