import { Booking } from '../../domain/models';

export interface IBookings {
  getBookings: () => Booking[];
  confirmBooking: (id: number) => boolean;
}
