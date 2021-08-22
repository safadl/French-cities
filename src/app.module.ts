import { Module, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule} from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { VilleSchema } from './schemas/villes';

@Module({
  imports: [HttpModule,MongooseModule.forRoot('mongodb://localhost/villes'),MongooseModule.forFeature([{name:'Ville',schema:VilleSchema}])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
