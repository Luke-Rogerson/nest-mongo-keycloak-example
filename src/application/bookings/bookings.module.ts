import { Module } from '@nestjs/common';
import { BookingsDbModule } from '../../infrastructure/repository/bookings/bookings.module';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';

@Module({
  imports: [BookingsDbModule],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class BookingsModule {}
