import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateArtistInput, UpdateArtistInput } from 'src/graphql';
import { BandsService } from '../bands/bands.service';
import { ConfigContext } from '../users/user.model';
import { ArtistResponse } from './artists.model';
import { ArtistsService } from './artitsts.service';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
  ) {}

  @Query()
  async artists(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.artistsService.findAll(limit, offset);
  }

  @Query()
  async artist(@Args('id') id: string) {
    return this.artistsService.findOneById(id);
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() artist: ArtistResponse) {
    const { bandsIds } = artist;

    return Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.findOneById(id);
      }),
    );
  }

  @Mutation('createArtist')
  async create(
    @Args('createArtistInput') createArtistInput: CreateArtistInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.artistsService.create(createArtistInput, ctx);
  }

  @Mutation('updateArtist')
  async update(
    @Args('updateArtistInput') updateArtistInput: UpdateArtistInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.artistsService.update(updateArtistInput, ctx);
  }

  @Mutation('deleteArtist')
  async delete(@Args('id') id: string, @Context() ctx: ConfigContext) {
    return this.artistsService.delete(id, ctx);
  }

  @Resolver()
  @ResolveField()
  id(artist: ArtistResponse) {
    return artist._id;
  }
}
