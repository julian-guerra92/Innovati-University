import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';

import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.studentsService.findAll(paginationDto);
  }

  @Get('id/:id')
  findOneById(@Param('id') id: string) {
    return this.studentsService.findOneById(+id);
  }

  @Get('identification/:identification')
  findOneByIdentification(@Param('identification') identification: string) {
    return this.studentsService.findOneByIdentificaition(identification);
  }

  @Patch('id/:id')
  updateById(
    @Param('id') id: string,
    @Body() updateStudentDto: UpdateStudentDto
  ) {
    return this.studentsService.updateById(+id, updateStudentDto);
  }

  @Patch('identification/:identification')
  updateByIdentification(
    @Param('identification') identification: string,
    @Body() updateStudentDto: UpdateStudentDto
  ) {
    return this.studentsService.updateByIdentification(identification, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsService.remove(+id);
  }

}