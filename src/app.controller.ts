import { Controller, Get,Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getData')
  getMyData() {
    return this.appService.getData();
  }
  @Get('outre')
  getOutre(){
    return this.appService.getOutre();

  }
  @Post('postData')
  postData(){
return this.appService.postData();
  }
}
