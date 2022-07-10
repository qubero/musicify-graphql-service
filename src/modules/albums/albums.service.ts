import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateAlbumInput, Delete, UpdateAlbumInput } from 'src/graphql';
import { ConfigContext } from '../users/user.model';
import { AlbumResponse } from './albums.model';

@Injectable()
export class AlbumsService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.ALBUMS_URL,
    });
  }

  async findAll(limit: number, offset: number) {
    const res = await this.client.get('/', {
      params: { limit, offset },
    });

    return (res.data.items || []) as AlbumResponse[];
  }

  async findOneById(id: string) {
    const res = await this.client.get(id);
    return res.data as AlbumResponse;
  }

  async create(data: CreateAlbumInput, ctx: ConfigContext) {
    const res = await this.client.post('/', data, ctx.config);
    return res.data as AlbumResponse;
  }

  async update({ id, ...data }: UpdateAlbumInput, ctx: ConfigContext) {
    const res = await this.client.put(id, data, ctx.config);
    return res.data as AlbumResponse;
  }

  async delete(id: string, ctx: ConfigContext) {
    const res = await this.client.delete(id, ctx.config);
    return res.data as Delete;
  }
}
