import { forwardRef, Module } from '@nestjs/common';
import { ArtistsModule } from '../artists/artitsts.module';
import { GenresModule } from '../genres/genres.module';
import { BandsResolver } from './bands.resolver';
import { BandsService } from './bands.service';

@Module({
  providers: [BandsService, BandsResolver],
  imports: [GenresModule, forwardRef(() => ArtistsModule)],
  exports: [BandsService],
})
export class BandsModule {}
