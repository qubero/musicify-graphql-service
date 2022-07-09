import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { CreateTrackInput, Delete, UpdateTrackInput } from 'src/graphql';
import { TrackResponse } from './tracks.model';

@Injectable()
export class TracksService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.TRACKS_URL,
    });
  }

  async findAll(limit: number, offset: number) {
    const res = await this.client.get('/', {
      params: { limit, offset },
    });

    return (res.data.items || []) as TrackResponse[];
  }

  async findOneById(id: string) {
    const res = await this.client.get(id);
    return res.data as TrackResponse;
  }

  async create(data: CreateTrackInput, ctx) {
    const res = await this.client.post('/', data, ctx.config);
    return res.data as TrackResponse;
  }

  async update({ id, ...data }: UpdateTrackInput, ctx) {
    const res = await this.client.put(id, data, ctx.config);
    return res.data as TrackResponse;
  }

  async delete(id: string, ctx) {
    const res = await this.client.delete(id, ctx.config);
    return res.data as Delete;
  }
}
