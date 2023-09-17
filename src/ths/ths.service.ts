import { Injectable } from '@nestjs/common';
import { CreateThDto } from './dto/create-th.dto';
import { UpdateThDto } from './dto/update-th.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class ThsService {
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
  async findSkipSubcombination(
    pageSize: number,
    pageNo: number,
    combinationId: number,
  ) {
    // 条件查询
    let whereCondition = {};

    if (combinationId) {
      whereCondition = {
        combinationId: {
          equals: combinationId,
        },
      };
    }
    const total = await prisma.subCombination.count({
      where: whereCondition,
    });
    const data = await prisma.subCombination.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
      where: whereCondition,
    });
    const success = true;
    return { data, success, total };
  }

  // 分页查询股票数据
  async findSkipStocks(
    pageSize: number,
    pageNo: number,
    subCombinationId: number,
  ) {
    // 条件查询
    let whereCondition = {};
    if (subCombinationId) {
      whereCondition = {
        subCombinationId: {
          equals: subCombinationId,
        },
      };
    }
    const total = await prisma.stocks.count({
      where: whereCondition,
    });
    const data = await prisma.stocks.findMany({
      skip: pageSize * (pageNo - 1),
      take: pageSize,
      where: whereCondition,
    });
    const success = true;
    return { data, success, total };
  }
}
