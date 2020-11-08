import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/user.schema';

export type FavoriteDocument = Favorite & Document;

@Schema()
export class Favorite {

    @Prop({ required: true })
    user: string;

    @Prop()
    favorites: string[];


}

export const FavoriteSchema = SchemaFactory.createForClass(Favorite);