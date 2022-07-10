import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { JWT, RegisterUserInput } from 'src/graphql';
import { UserResponse } from './user.model';

@Injectable()
export class UsersService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.USERS_URL,
    });
  }

  async login(email: string, password: string) {
    const res = await this.client.post('/login', { email, password });
    return res.data as JWT;
  }

  async findOneById(id: string) {
    const res = await this.client.get(id);
    return res.data as UserResponse;
  }

  async register(data: RegisterUserInput) {
    const res = await this.client.post('/register', data);
    return res.data as UserResponse;
  }
}
