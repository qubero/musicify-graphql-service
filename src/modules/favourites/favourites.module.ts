import { Module } from '@nestjs/common';
import { ArtistsModule } from '../artists/artitsts.module';
import { BandsModule } from '../bands/bands.module';
import { GenresModule } from '../genres/genres.module';
import { FavouritesService } from './favourites.service';
import { FavouritesResolver } from './favourites.resolver';
import { TracksModule } from '../tracks/tracks.module';

@Module({
  providers: [FavouritesService, FavouritesResolver],
  imports: [GenresModule, BandsModule, ArtistsModule, TracksModule],
  exports: [FavouritesService],
})
export class FavouritesModule {}
