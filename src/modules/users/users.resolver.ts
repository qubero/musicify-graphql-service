import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { RegisterUserInput } from 'src/graphql';
import { UserResponse } from './user.model';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query('jwt')
  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.usersService.login(email, password);
  }

  @Query('user')
  async getById(@Args('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @Mutation()
  async register(
    @Args('registerUserInput') registerUserInput: RegisterUserInput,
  ) {
    return this.usersService.register(registerUserInput);
  }

  @Resolver()
  @ResolveField()
  id(user: UserResponse) {
    return user._id;
  }
}
