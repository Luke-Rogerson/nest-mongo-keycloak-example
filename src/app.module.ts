import { Module } from '@nestjs/common';
import { BookingsModule } from './application/bookings/bookings.module';

@Module({
  imports: [BookingsModule],
})
export class AppModule {}
