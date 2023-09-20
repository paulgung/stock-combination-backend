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

    // 对pageNo的空值做处理
    const _pageNo = pageNo ? pageNo : 1;
    const data = await prisma.combination.findMany({
      skip: pageSize ? pageSize * (_pageNo - 1) : 0,
      take: pageSize ? pageSize : 999999,
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

    // 对pageNo的空值做处理
    const _pageNo = pageNo ? pageNo : 1;
    const data = await prisma.subCombination.findMany({
      skip: pageSize ? pageSize * (_pageNo - 1) : 0,
      take: pageSize ? pageSize : 999999,
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

    // 对pageNo的空值做处理
    const _pageNo = pageNo ? pageNo : 1;
    const data = await prisma.stocks.findMany({
      skip: pageSize ? pageSize * (_pageNo - 1) : 0,
      take: pageSize ? pageSize : 999999,
      where: whereCondition,
    });
    const success = true;
    return { data, success, total };
  }

  // 添加组合数据
  async addCombination(data) {
    console.log('弓少旭想看看data', data);
    return await prisma.combination.create({
      data,
    });
  }

  // 添加子组合数据
  async addSubcombination(data) {
    console.log('弓少旭想看看data', data);
    return await prisma.subCombination.create({
      data,
    });
  }

  // 添加股票数据
  async addStocks(data) {
    console.log('弓少旭想看看data', data);
    return await prisma.stocks.create({
      data,
    });
  }

  // 修改组合数据
  async updateCombination(id, data) {
    console.log('弓少旭想看看修改的id和data', id, data);
    return prisma.combination.update({
      where: { id },
      data,
    });
  }

  // 修改子组合数据
  async updateSubcombination(id, data) {
    console.log('弓少旭想看看修改的id和data', id, data);
    return prisma.subCombination.update({
      where: { id },
      data,
    });
  }

  // 修改股票数据
  async updateStocks(id, data) {
    console.log('弓少旭想看看修改的id和data', id, data);
    return prisma.stocks.update({
      where: { id },
      data,
    });
  }

  // 删除组合数据
  async deleteCombination(id) {
    console.log('弓少旭想看看删除的id', id);
    return prisma.combination.delete({
      where: { id },
    });
  }

  // 删除子组合数据
  async deleteSubcombination(id) {
    console.log('弓少旭想看看删除的id', id);
    return prisma.subCombination.delete({
      where: { id },
    });
  }

  // 删除股票数据
  async deleteStocks(id) {
    console.log('弓少旭想看看删除的id', id);
    return prisma.stocks.delete({
      where: { id },
    });
  }
}
