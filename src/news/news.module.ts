import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
// import { CalculatorController } from './calculator/calculator.controller';
// import { CalculatorService } from './calculator/calculator.service';
// import { CalculatorModule } from './calculator/calculator.module';

@Module({
  controllers: [NewsController],
  providers: [NewsService],
  imports: [],
})
export class NewsModule {}
