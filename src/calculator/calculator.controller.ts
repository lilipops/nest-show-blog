/* eslint-disable prettier/prettier */
import { Controller, Put, Patch, Body } from '@nestjs/common';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
    constructor(private readonly calculatorService: CalculatorService) {}

    @Put()
    @Patch()
    calculate(@Body('operator1') operator1: number, @Body('operator2') operator2: number, @Body('operationType') operationType: string ) {
        switch (operationType) {
            case 'plus':
                return this.calculatorService.add(operator1, operator2);
            case 'minus':
                return this.calculatorService.substract(operator1, operator2);
            case 'multiply':
                return this.calculatorService.multiply(operator1, operator2)
            case 'divide': 
                return this.calculatorService.divide(operator1, operator2)
            default: 
                throw new Error('INvalid operation')
        }
    }
    

}