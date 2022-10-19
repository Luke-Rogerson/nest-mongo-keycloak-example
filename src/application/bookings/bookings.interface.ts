import { Booking } from '../../domain/models';

export interface IBookings {
  getBookings: () => Promise<Booking[]>;
  confirmBooking: (id: number) => boolean;
}
