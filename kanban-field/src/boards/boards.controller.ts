import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, NotFoundException, Req, UseGuards } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createBoardDto: CreateBoardDto, @Req() req) {
    try {
      return await this.boardsService.create(createBoardDto, req.user.userId);
    } catch (error) {
      throw new HttpException(`Falha ao criar o quadro: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req) {
    try {
      return await this.boardsService.findAll(req.user.userId);
    } catch (error) {
      throw new HttpException(`Falha ao consultar todos os quadros: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Req() req) {
    try {
      return await this.boardsService.findOne(id, req.user.userId);
    } catch (error) {

      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }

      throw new HttpException('Falha ao consultar o quadro', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto, @Req() req) {
    try {
      return await this.boardsService.update(id, updateBoardDto, req.user.userId);
    } catch (error) {

      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }

      throw new HttpException(`Falha ao atualizar o quadro ${error.message}`, HttpStatus.NOT_FOUND)
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Req() req) {
    try {
      return await this.boardsService.remove(id, req.user.userId);
    } catch (error) {

      if (error instanceof NotFoundException) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }

      throw new HttpException(`Falha ao remover o quadro: ${error.message}`, HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
