import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateBandInput, UpdateBandInput } from 'src/graphql';
import { ArtistsService } from '../artists/artitsts.service';
import { GenresService } from '../genres/genres.service';
import { ConfigContext } from '../users/user.model';
import { BandResponse } from './bands.model';
import { BandsService } from './bands.service';

@Resolver('Band')
export class BandsResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
  ) {}

  @Query()
  async bands(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.bandsService.findAll(limit, offset);
  }

  @Query()
  async band(@Args('id') id: string) {
    return this.bandsService.findOneById(id);
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() band: BandResponse) {
    const { genresIds } = band;

    return Promise.all(
      genresIds.map((id) => {
        return this.genresService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async members(@Parent() band: BandResponse) {
    const { members } = band;

    const artists = await Promise.all(
      members.map(({ id }) => {
        return this.artistsService.findOneById(id);
      }),
    );

    return artists.map(({ firstName, middleName, secondName }, index) => ({
      id: members[index].id,
      firstName,
      middleName,
      secondName,
      instrument: members[index].instrument,
      years: members[index].years,
    }));
  }

  @Mutation('createBand')
  async create(
    @Args('createBandInput') createBandInput: CreateBandInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.bandsService.create(createBandInput, ctx);
  }

  @Mutation('updateBand')
  async update(
    @Args('updateBandInput') updateBandInput: UpdateBandInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.bandsService.update(updateBandInput, ctx);
  }

  @Mutation('deleteBand')
  async delete(@Args('id') id: string, @Context() ctx: ConfigContext) {
    return this.bandsService.delete(id, ctx);
  }

  @Resolver()
  @ResolveField()
  id(band: BandResponse) {
    return band._id;
  }
}
