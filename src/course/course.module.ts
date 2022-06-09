import { Module } from '@nestjs/common';

import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SequelizeModule } from '@nestjs/sequelize';

import { UserMikro } from 'src/entities/mikroorm/user.mikro.entity';
import { UserTypeorm } from 'src/entities/typeorm/user.typeorm.entity';
import { UserSequelize } from 'src/entities/sequelize/user.sequelize.entity';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    MikroOrmModule.forFeature([UserMikro]),
    TypeOrmModule.forFeature([UserTypeorm]),
    SequelizeModule.forFeature([UserSequelize]),
  ],
  providers: [CourseService, PrismaService],
  controllers: [CourseController],
  exports: [CourseService],
})
export class CourseModule {}
