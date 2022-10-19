export interface User {
  firstName: string;
  lastName: string;
}

export interface Booking {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  sitter: User;
  confirmed: boolean;
}
