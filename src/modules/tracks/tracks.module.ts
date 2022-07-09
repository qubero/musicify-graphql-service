import { forwardRef, Module } from '@nestjs/common';
import { AlbumsModule } from '../albums/albums.module';
import { ArtistsModule } from '../artists/artitsts.module';
import { BandsModule } from '../bands/bands.module';
import { GenresModule } from '../genres/genres.module';
import { TracksResolver } from './tracks.resolver';
import { TracksService } from './tracks.service';

@Module({
  providers: [TracksService, TracksResolver],
  imports: [
    GenresModule,
    BandsModule,
    ArtistsModule,
    forwardRef(() => AlbumsModule),
  ],
  exports: [TracksService],
})
export class TracksModule {}
