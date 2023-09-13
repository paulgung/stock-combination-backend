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
import { ThsService } from './ths.service';
import { CreateThDto } from './dto/create-th.dto';
import { UpdateThDto } from './dto/update-th.dto';

@Controller('ths')
export class ThsController {
  constructor(private readonly thsService: ThsService) {}

  @Post()
  create(@Body() createThDto: CreateThDto) {
    return this.thsService.create(createThDto);
  }

  @Get()
  findAll() {
    return this.thsService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThDto: UpdateThDto) {
    return this.thsService.update(+id, updateThDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.thsService.remove(+id);
  }

  // 分页查询组合数据
  @Get('combination')
  findSkipCombination(@Query() query) {
    return this.thsService.findSkipCombination(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }

  // 分页查询子组合数据
  @Get('subCombination')
  findSkipSubcombination(@Query() query) {
    return this.thsService.findSkipSubcombination(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }

  // 分页查询股票信息数据
  @Get('stocks')
  findSkipStocks(@Query() query) {
    return this.thsService.findSkipStocks(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
    );
  }
}
