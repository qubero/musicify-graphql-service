import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { AddToFavouritesInput } from 'src/graphql';
import { ConfigContext } from '../users/user.model';

@Injectable()
export class FavouritesService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.FAVOURITES_URL,
    });
  }

  async findOne<T>(ctx: ConfigContext) {
    const res = await this.client.get('/', ctx.config);
    return res.data as T;
  }

  async addToFavourites<T>(
    { id }: AddToFavouritesInput,
    type: string,
    ctx: ConfigContext,
  ) {
    const data = {
      type,
      id,
    };

    const res = await this.client.put('/add', data, ctx.config);
    return res.data as T;
  }
}
