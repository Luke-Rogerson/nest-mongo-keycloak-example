import { Booking } from 'src/domain/models';

export interface IBooking {
  getAll: () => Promise<Booking[]>;
  confirmBooking: (id: number) => Promise<Booking>;
}
