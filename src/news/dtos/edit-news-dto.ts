/* eslint-disable prettier/prettier */
import {  ValidateIf } from 'class-validator';

export class EditNewsDto {
    @ValidateIf((o) => o !== undefined)
    title: string;

    @ValidateIf((o) => o !== undefined)
    description: string;

    @ValidateIf((o) => o !== undefined)
    author: string;

    @ValidateIf((o) => o !== undefined)
    countView?: number;

    @ValidateIf((o) => o !== undefined)
    cover?: string;
}