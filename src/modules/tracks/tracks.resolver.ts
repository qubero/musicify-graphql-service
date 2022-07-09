import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateTrackInput, UpdateTrackInput } from 'src/graphql';
import { AlbumsService } from '../albums/albums.service';
import { ArtistsService } from '../artists/artitsts.service';
import { BandsService } from '../bands/bands.service';
import { GenresService } from '../genres/genres.service';
import { ConfigContext } from '../users/user.model';
import { TrackResponse } from './tracks.model';
import { TracksService } from './tracks.service';

@Resolver('Track')
export class TracksResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private readonly tracksService: TracksService,
    private readonly genresService: GenresService,
    private readonly bandsService: BandsService,
    private readonly albumsService: AlbumsService,
  ) {}

  @Query()
  async tracks(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.tracksService.findAll(limit, offset);
  }

  @Query()
  async track(@Args('id') id: string) {
    return this.tracksService.findOneById(id);
  }

  @Resolver()
  @ResolveField()
  async album(@Parent() track: TrackResponse) {
    const { albumId } = track;

    return this.albumsService.findOneById(albumId);
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() track: TrackResponse) {
    const { genresIds } = track;

    return Promise.all(
      genresIds.map((id) => {
        return this.genresService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() track: TrackResponse) {
    const { bandsIds } = track;

    return Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async artists(@Parent() track: TrackResponse) {
    const { artistsIds } = track;

    return Promise.all(
      artistsIds.map((id) => {
        return this.artistsService.findOneById(id);
      }),
    );
  }

  @Mutation('createTrack')
  async create(
    @Args('createTrackInput') createTrackInput: CreateTrackInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.tracksService.create(createTrackInput, ctx);
  }

  @Mutation('updateTrack')
  async update(
    @Args('updateTrackInput') updateTrackInput: UpdateTrackInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.tracksService.update(updateTrackInput, ctx);
  }

  @Mutation('deleteTrack')
  async delete(@Args('id') id: string, @Context() ctx) {
    return this.tracksService.delete(id, ctx);
  }

  @Resolver()
  @ResolveField()
  id(track: TrackResponse) {
    return track._id;
  }
}
