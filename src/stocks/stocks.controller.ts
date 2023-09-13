import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('stocks')
export class StocksController {
  constructor(private readonly stocksService: StocksService) {}

  @Post()
  create(@Body() createStockDto: CreateStockDto) {
    return this.stocksService.create(createStockDto);
  }

  @Get()
  findAll() {
    return this.stocksService.findAll();
  }

  // 分页查询组合数据
  @Get('combination')
  findSkipCombination(@Query() query) {
    // return this.stocksService.findSkipCombination(
    //   parseInt(query.pageSize),
    //   parseInt(query.pageNo),
    // );
    return this.stocksService.findAll();
  }

  // 分页查询子组合数据
  @Get('subCombination')
  findSkipSubcombination(@Query() query) {
    // return this.stocksService.findSkipSubcombination(
    //   parseInt(query.pageSize),
    //   parseInt(query.pageNo),
    // );
    return this.stocksService.findAll();
  }

  // 分页查询股票信息数据
  @Get('stocks')
  findSkipStocks(@Query() query) {
    // return this.stocksService.findSkipStocks(
    //   parseInt(query.pageSize),
    //   parseInt(query.pageNo),
    // );
    return this.stocksService.findAll();
  }
}
