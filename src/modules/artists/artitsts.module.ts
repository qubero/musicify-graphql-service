import { forwardRef, Module } from '@nestjs/common';
import { BandsModule } from '../bands/bands.module';
import { ArtistsResolver } from './artists.resolver';
import { ArtistsService } from './artitsts.service';

@Module({
  providers: [ArtistsService, ArtistsResolver],
  imports: [forwardRef(() => BandsModule)],
  exports: [ArtistsService],
})
export class ArtistsModule {}
