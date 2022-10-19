import { Booking } from 'src/domain/models';

export interface IBooking {
  getAll: () => Promise<Booking[]>;
  // update: (booking: Booking) => Promise<Booking>;
}
