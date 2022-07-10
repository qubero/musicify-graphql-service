import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateAlbumInput, UpdateAlbumInput } from 'src/graphql';
import { ArtistsService } from '../artists/artitsts.service';
import { BandsService } from '../bands/bands.service';
import { GenresService } from '../genres/genres.service';
import { TracksService } from '../tracks/tracks.service';
import { ConfigContext } from '../users/user.model';
import { AlbumResponse } from './albums.model';
import { AlbumsService } from './albums.service';

@Resolver('Album')
export class AlbumsResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private readonly albumsService: AlbumsService,
    private readonly genresService: GenresService,
    private readonly bandsService: BandsService,
    private readonly tracksService: TracksService,
  ) {}

  @Query()
  async albums(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.albumsService.findAll(limit, offset);
  }

  @Query()
  async album(@Args('id') id: string) {
    return this.albumsService.findOneById(id);
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() album: AlbumResponse) {
    const { genresIds } = album;

    return Promise.all(
      genresIds.map((id) => {
        return this.genresService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() album: AlbumResponse) {
    const { bandsIds } = album;

    return Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async artists(@Parent() album: AlbumResponse) {
    const { artistsIds } = album;

    return Promise.all(
      artistsIds.map((id) => {
        return this.artistsService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async tracks(@Parent() album: AlbumResponse) {
    const { trackIds } = album;

    return Promise.all(
      trackIds.map((id) => {
        return this.tracksService.findOneById(id);
      }),
    );
  }

  @Mutation('createAlbum')
  async create(
    @Args('createAlbumInput') createAlbumInput: CreateAlbumInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.albumsService.create(createAlbumInput, ctx);
  }

  @Mutation('updateAlbum')
  async update(
    @Args('updateAlbumInput') updateAlbumData: UpdateAlbumInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.albumsService.update(updateAlbumData, ctx);
  }

  @Mutation('deleteAlbum')
  async delete(@Args('id') id: string, @Context() ctx: ConfigContext) {
    return this.albumsService.delete(id, ctx);
  }

  @Resolver()
  @ResolveField()
  id(album: AlbumResponse) {
    return album._id;
  }
}
