import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateBandInput, Delete, UpdateBandInput } from 'src/graphql';
import { ConfigContext } from '../users/user.model';
import { BandResponse } from './bands.model';

@Injectable()
export class BandsService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.BANDS_URL,
    });
  }

  async findAll(limit: number, offset: number) {
    const res = await this.client.get('/', {
      params: { limit, offset },
    });

    return (res.data.items || []) as BandResponse[];
  }

  async findOneById(id: string) {
    const res = await this.client.get(id);
    return res.data as BandResponse;
  }

  async create(data: CreateBandInput, ctx: ConfigContext) {
    const res = await this.client.post('/', data, ctx.config);
    return res.data as BandResponse;
  }

  async update({ id, ...data }: UpdateBandInput, ctx: ConfigContext) {
    const res = await this.client.put(id, data, ctx.config);
    return res.data as BandResponse;
  }

  async delete(id: string, ctx: ConfigContext) {
    const res = await this.client.delete(id, ctx.config);
    return res.data as Delete;
  }
}
