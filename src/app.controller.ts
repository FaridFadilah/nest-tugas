import { Controller, Get, Post, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('login')
  index(){
    return
  }

  @Get('/home')
  @Render('home')
  getHome(){
    return
  }

  @Post('/login')
  login(@Res() res: Response): void{
    res.redirect('/home')
  }

  @Get('/logout')
  logout(@Res() res: Response): void{
    res.redirect('/')
  }
}