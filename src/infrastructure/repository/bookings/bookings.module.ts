import { Module } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { IBooking } from './bookings';
import { BookingsDB } from './bookings.mongo';

@Module({
  providers: [
    {
      provide: 'BOOKINGS_REPO',
      useFactory: async (): Promise<IBooking> => {
        try {
          const client = await MongoClient.connect(
            process.env.DB_CONFIG as string,
          );

          return new BookingsDB(
            client,
            'bookings',
            process.env.DB_NAME as string,
          );
        } catch (e) {
          throw e;
        }
      },
    },
  ],
  exports: ['BOOKINGS_REPO'],
})
export class BookingsDbModule {}
