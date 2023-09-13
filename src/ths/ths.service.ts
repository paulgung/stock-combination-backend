import { Injectable } from '@nestjs/common';
import { CreateThDto } from './dto/create-th.dto';
import { UpdateThDto } from './dto/update-th.dto';
// import { PrismaService } from '../prisma.service';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ThsService {
  // constructor(private prisma: PrismaService) {}

  create(createThDto: CreateThDto) {
    return 'This action adds a new th';
  }

  findAll() {
    return `This action returns all ths`;
  }

  findOne(id: number) {
    return `This action returns a #${id} th`;
  }

  update(id: number, updateThDto: UpdateThDto) {
    return `This action updates a #${id} th`;
  }

  remove(id: number) {
    return `This action removes a #${id} th`;
  }

  // 分页查询组合数据
  async findSkipCombination(pageSize: number, pageNo: number) {
    const total = await prisma.combination.count();

    const data = await prisma.combination.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }

  // 分页查询子组合数据
  async findSkipSubcombination(pageSize: number, pageNo: number) {
    const total = await prisma.subCombination.count();
    const data = await prisma.subCombination.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }

  // 分页查询股票数据
  async findSkipStocks(pageSize: number, pageNo: number) {
    const total = await prisma.stocks.count();
    const data = await prisma.stocks.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
    });
    const success = true;
    return { data, success, total };
  }
}
