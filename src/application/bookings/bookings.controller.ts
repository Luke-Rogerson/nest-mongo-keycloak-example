import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Put,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';

import { isNumeric } from '../../utils';
import { Booking } from '../../domain/models';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Get()
  getBookings(): Booking[] {
    return this.bookingsService.getBookings();
  }

  @Put(':id/confirm')
  confirmBooking(@Param('id') id: string) {
    // throw new NotFoundException();
    if (!isNumeric(id)) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'ID must be a number',
      });
    }
    return this.bookingsService.confirmBooking(Number(id));
  }
}
