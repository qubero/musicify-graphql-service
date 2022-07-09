import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AddToFavouritesInput } from 'src/graphql';
import { ArtistsService } from '../artists/artitsts.service';
import { BandsService } from '../bands/bands.service';
import { GenresService } from '../genres/genres.service';
import { TracksService } from '../tracks/tracks.service';
import { ConfigContext } from '../users/user.model';
import { FavouritesResponse } from './favourites.model';
import { FavouritesService } from './favourites.service';

@Resolver('Favourites')
export class FavouritesResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private readonly favouritesService: FavouritesService,
    private readonly genresService: GenresService,
    private readonly bandsService: BandsService,
    private readonly tracksService: TracksService,
  ) {}

  @Query()
  async favourites(@Context() ctx: ConfigContext) {
    return this.favouritesService.findOne<FavouritesResponse>(ctx);
  }

  @Resolver()
  @ResolveField()
  async tracks(@Parent() favourites: FavouritesResponse) {
    const { tracksIds } = favourites;

    return Promise.all(
      tracksIds.map((id) => {
        return this.tracksService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() favourites: FavouritesResponse) {
    const { genresIds } = favourites;

    return Promise.all(
      genresIds.map((id) => {
        return this.genresService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() favourites: FavouritesResponse) {
    const { bandsIds } = favourites;

    return Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.findOneById(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async artists(@Parent() favourites: FavouritesResponse) {
    const { artistsIds } = favourites;

    return Promise.all(
      artistsIds.map((id) => {
        return this.artistsService.findOneById(id);
      }),
    );
  }

  @Mutation('addBandToFavourites')
  async addBandToFavourites(
    @Args('input') addToFavouritesData: AddToFavouritesInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.favouritesService.addToFavourites<FavouritesResponse>(
      addToFavouritesData,
      'bands',
      ctx,
    );
  }

  @Mutation('addArtistToFavourites')
  async addArtistToFavourites(
    @Args('input') addToFavouritesData: AddToFavouritesInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.favouritesService.addToFavourites<FavouritesResponse>(
      addToFavouritesData,
      'artists',
      ctx,
    );
  }

  @Mutation('addGenreToFavourites')
  async addGenreToFavourites(
    @Args('input') addToFavouritesData: AddToFavouritesInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.favouritesService.addToFavourites<FavouritesResponse>(
      addToFavouritesData,
      'genres',
      ctx,
    );
  }

  @Mutation('addTrackToFavourites')
  async addTrackToFavourites(
    @Args('input') addToFavouritesData: AddToFavouritesInput,
    @Context() ctx: ConfigContext,
  ) {
    return this.favouritesService.addToFavourites<FavouritesResponse>(
      addToFavouritesData,
      'favourites',
      ctx,
    );
  }

  @Resolver()
  @ResolveField()
  id(favourites: FavouritesResponse) {
    return favourites._id;
  }
}
