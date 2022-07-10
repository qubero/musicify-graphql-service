import { forwardRef, Module } from '@nestjs/common';
import { ArtistsModule } from '../artists/artitsts.module';
import { BandsModule } from '../bands/bands.module';
import { GenresModule } from '../genres/genres.module';
import { TracksModule } from '../tracks/tracks.module';
import { AlbumsResolver } from './albums.resolver';
import { AlbumsService } from './albums.service';

@Module({
  providers: [AlbumsService, AlbumsResolver],
  imports: [
    GenresModule,
    BandsModule,
    forwardRef(() => TracksModule),
    forwardRef(() => ArtistsModule),
  ],
  exports: [AlbumsService],
})
export class AlbumsModule {}
