import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { HttpService} from '@nestjs/axios';
import {Ville} from './schemas/villes'
import {InjectModel } from '@nestjs/mongoose'
import {Model} from 'mongoose'
@Injectable()
export class AppService {
  constructor(
    private httpService:HttpService,
    @InjectModel('Ville') private readonly Ville:Model<Ville>
    ){}
  getData() {
    return this.httpService
    .get('https://unpkg.com/codes-postaux@3.3.0/codes-postaux.json')
    .pipe(
      map(response=>response.data.filter((item: { codePostal: string; })=>{
        return !item.codePostal.startsWith("97")&&!item.codePostal.startsWith("98")
      }).sort((x: { nomCommune: string; }, y: { nomCommune: string; }) => x.nomCommune.localeCompare(y.nomCommune, undefined, { caseFirst: "upper" }))),
    )

  }
  getOutre(){
    return this.httpService
    .get('https://unpkg.com/codes-postaux@3.3.0/codes-postaux.json')
    .pipe(
      map(response=>response.data.filter((item: { codePostal: string; })=>{
     
     
       
     
        return item.codePostal.startsWith("97")||item.codePostal.startsWith("98")
      }).sort((x: { nomCommune: string; }, y: { nomCommune: string; }) => x.nomCommune.localeCompare(y.nomCommune, undefined, { caseFirst: "upper" }))),
    )
 
  }

   postData(){
   return this.httpService
   .get('https://unpkg.com/codes-postaux@3.3.0/codes-postaux.json')
   .pipe(map(
     response=>
     {  response.data.map(item=>{
      const ville = new this.Ville(
{     nomCommune:  item.nomCommune, 
      codePostal:item.codePostal, 
      codeCommune:item.codeCommune
}       )

       ville.save()
      })
      // const res=response.data.map((item)=>item.save())
      // //  response.data.save()
      // console.log(res)
}
   ))

  }
}
