import { Controller, Get } from '@nestjs/common';
import { CourseService } from './course.service';

@Controller()
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get('typeorm')
  getTypeorm() {
    return this.courseService.findByTypeorm();
  }

  @Get('mikro-orm')
  getMikro() {
    return this.courseService.findByMikro();
  }

  @Get('prisma')
  getPrisma() {
    return this.courseService.findByPrisma();
  }

  @Get('sequelize')
  getSequelize() {
    return this.courseService.findBySequelize();
  }
}
