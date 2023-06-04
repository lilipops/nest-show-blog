/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsNotEmpty, ValidateIf } from 'class-validator';

export class CreateNewsDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    author: string;

    @ValidateIf((o) => o !== undefined)
    countView?: number;

    @ValidateIf((o) => o !== undefined)
    @IsString()
    cover?: string;
}