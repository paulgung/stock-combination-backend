import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Put,
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
      parseInt(query.combinationId),
    );
  }

  // 分页查询股票信息数据
  @Get('stocks')
  findSkipStocks(@Query() query) {
    return this.thsService.findSkipStocks(
      parseInt(query.pageSize),
      parseInt(query.pageNo),
      parseInt(query.subCombinationId),
      parseInt(query.combinationId),
    );
  }

  // 新增组合数据
  @Post('combination')
  addCombination(@Body() data: any) {
    return this.thsService.addCombination(data);
  }

  // 新增子组合数据
  @Post('subCombination')
  addSubcombination(@Body() data: any) {
    return this.thsService.addSubcombination(data);
  }

  // 新增股票信息数据
  @Post('stocks')
  addStocks(@Body() data: any) {
    return this.thsService.addStocks(data);
  }

  // 修改组合数据
  @Put('combination')
  updateCombination(@Param('id') id: string, @Body() data) {
    return this.thsService.updateCombination(parseInt(id), data);
  }

  // 修改子组合数据
  @Put('subCombination')
  updateSubcombination(@Param('id') id: string, @Body() data) {
    return this.thsService.updateSubcombination(parseInt(id), data);
  }

  // 修改股票信息数据
  @Put('stocks')
  updateStocks(@Param('id') id: string, @Body() data) {
    return this.thsService.updateStocks(parseInt(id), data);
  }

  // 删除组合数据
  @Delete('combination')
  deleteCombination(@Param('id') id: string) {
    return this.thsService.deleteCombination(parseInt(id));
  }

  // 删除子组合数据
  @Delete('subCombination')
  deleteSubcombination(@Param('id') id: string) {
    return this.thsService.deleteSubcombination(parseInt(id));
  }

  // 删除股票信息数据
  @Delete('stocks')
  deleteStocks(@Param('id') id: string) {
    return this.thsService.deleteStocks(parseInt(id));
  }

  // 分页查询股票信息数据
  @Get('ai-stack')
  aiStack(@Query() query) {
    return this.thsService.aiErrorStackParse();
  }
}
