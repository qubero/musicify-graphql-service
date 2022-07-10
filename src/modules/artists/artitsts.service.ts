import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateArtistInput, Delete, UpdateArtistInput } from 'src/graphql';
import { ConfigContext } from '../users/user.model';
import { ArtistResponse } from './artists.model';

@Injectable()
export class ArtistsService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.ARTISTS_URL,
    });
  }

  async findAll(limit: number, offset: number) {
    const res = await this.client.get('/', {
      params: { limit, offset },
    });

    return (res.data.items || []) as ArtistResponse[];
  }

  async findOneById(id: string) {
    const res = await this.client.get(id);
    return res.data as ArtistResponse;
  }

  async create(data: CreateArtistInput, ctx: ConfigContext) {
    const res = await this.client.post('/', data, ctx.config);
    return res.data as ArtistResponse;
  }

  async update({ id, ...data }: UpdateArtistInput, ctx: ConfigContext) {
    const res = await this.client.put(id, data, ctx.config);
    return res.data as ArtistResponse;
  }

  async delete(id: string, ctx: ConfigContext) {
    const res = await this.client.delete(id, ctx.config);
    return res.data as Delete;
  }
}
