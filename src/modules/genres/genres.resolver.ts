import {
  Args,
  Context,
  Mutation,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateGenreInput, UpdateGenreInput } from 'src/graphql';
import { ConfigContext } from '../users/user.model';
import { GenreResponse } from './genres.model';
import { GenresService } from './genres.service';

@Resolver('Genre')
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Query('genres')
  findAll(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.genresService.findAll(limit, offset);
  }

  @Query('genre')
  async getById(@Args('id') id: string) {
    return this.genresService.findOneById(id);
  }

  @Mutation('createGenre')
  async create(
    @Args('createGenreInput') createGenreInput: CreateGenreInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.genresService.create(createGenreInput, ctx);
  }

  @Mutation('updateGenre')
  async update(
    @Args('updateGenreInput') updateGenreInput: UpdateGenreInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.genresService.update(updateGenreInput, ctx);
  }

  @Mutation('deleteGenre')
  async delete(@Args('id') id: string, @Context() ctx) {
    return this.genresService.delete(id, ctx);
  }

  @Resolver()
  @ResolveField()
  id(genre: GenreResponse) {
    return genre._id;
  }
}
