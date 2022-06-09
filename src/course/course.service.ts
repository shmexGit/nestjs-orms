import { Injectable } from '@nestjs/common';
import { UserPrisma } from '@prisma/client';
import { InjectRepository as IRMikro } from '@mikro-orm/nestjs';
import { EntityRepository as RepositoryMikro } from '@mikro-orm/core';
import { InjectRepository as IRTypeorm } from '@nestjs/typeorm';
import { Repository as RepositoryTypeorm } from 'typeorm';
import { InjectModel } from '@nestjs/sequelize';
import { Repository as RepositorySequelize } from 'sequelize-typescript';

import { UserMikro } from 'src/entities/mikroorm/user.mikro.entity';
import { UserTypeorm } from 'src/entities/typeorm/user.typeorm.entity';
import { UserSequelize } from 'src/entities/sequelize/user.sequelize.entity';

import { PrismaService } from './prisma.service';

@Injectable()
export class CourseService {
  constructor(
    @IRMikro(UserMikro)
    private readonly userMikroRepository: RepositoryMikro<UserMikro>,
    @IRTypeorm(UserTypeorm)
    private readonly userTypeormRepository: RepositoryTypeorm<UserTypeorm>,
    private readonly prisma: PrismaService,
    @InjectModel(UserSequelize)
    private readonly userSequelizeRepository: RepositorySequelize<UserSequelize>,
  ) {}
  findByMikro(): Promise<UserMikro[]> {
    return this.userMikroRepository.findAll();
  }

  findByTypeorm(): Promise<UserTypeorm[]> {
    return this.userTypeormRepository.find();
  }

  findByPrisma(): Promise<UserPrisma[]> {
    return this.prisma.userPrisma.findMany();
  }

  findBySequelize(): Promise<UserSequelize[]> {
    return this.userSequelizeRepository.findAll();
  }
}
