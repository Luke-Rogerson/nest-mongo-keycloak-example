import { Injectable } from '@nestjs/common';
import { IBookings } from './bookings.interface';
// import { BookingDB } from '../../infrastructure/repository/booking.mongo';

@Injectable()
export class BookingsService implements IBookings {
  getBookings() {
    return [];
  }
  confirmBooking(id: number) {
    console.log('id :', id);
    return true;
  }
}
