/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
    add(operator1: number, operator2: number): number {
        return operator1 + operator2;
    }
    substract(operator1: number, operator2: number): number {
        return operator1 - operator2;
    }
    multiply(operator1: number, operator2: number): number {
        return operator1 * operator2;
    }
    divide(operator1: number, operator2: number): number {
        return operator1 / operator2;
    }

}