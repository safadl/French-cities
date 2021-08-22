import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

// export type VilleDocument = Ville ;

// @Schema()
// export class Ville {
//   @Prop()
//   nomCommune: string;

//   @Prop()
//   codeCommune: string;

//   @Prop()
//   CodePostal: string;
// }

// export const VilleSchema = SchemaFactory.createForClass(Ville);
export const VilleSchema = new mongoose.Schema({
    nomCommune:{type:String},
    codeCommune:{type:String},
    codePostal:{type:String}
})
export interface Ville{
    nomCommune:string;
    codeCommune:string;
    codePostal:string;
}