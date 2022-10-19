import { Inject, Injectable } from '@nestjs/common';
import { IBookings } from './bookings.interface';
import { BookingsDB } from '../../infrastructure/repository/bookings/bookings.mongo';

@Injectable()
export class BookingsService implements IBookings {
  constructor(
    @Inject('BOOKINGS_REPO')
    private readonly bookingsRepo: BookingsDB,
  ) {}
  async getBookings() {
    return await this.bookingsRepo.getAll();
  }
  confirmBooking(id: number) {
    console.log('id :', id);
    return true;
  }
}
