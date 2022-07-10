import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateGenreInput, Delete, UpdateGenreInput } from 'src/graphql';
import { ConfigContext } from '../users/user.model';
import { GenreResponse } from './genres.model';

@Injectable()
export class GenresService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.GENRES_URL,
    });
  }

  async findAll(limit: number, offset: number) {
    const res = await this.client.get('/', {
      params: { limit, offset },
    });
    return (res.data.items || []) as GenreResponse[];
  }

  async findOneById(id: string) {
    const res = await this.client.get(id);
    return res.data as GenreResponse;
  }

  async create(data: CreateGenreInput, ctx: ConfigContext) {
    const res = await this.client.post('/', data, ctx.config);
    return res.data as GenreResponse;
  }

  async update({ id, ...data }: UpdateGenreInput, ctx: ConfigContext) {
    const res = await this.client.put(id, data, ctx.config);
    return res.data as GenreResponse;
  }

  async delete(id: string, ctx: ConfigContext) {
    const res = await this.client.delete(id, ctx.config);
    return res.data as Delete;
  }
}
