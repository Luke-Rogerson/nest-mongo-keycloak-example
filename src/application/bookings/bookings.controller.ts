import {
  BadRequestException,
  NotFoundException,
  Controller,
  Get,
  HttpCode,
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
  async getBookings(): Promise<Booking[]> {
    return this.bookingsService.getBookings();
  }

  @HttpCode(202)
  @Put(':id/confirm')
  async confirmBooking(@Param('id') id: string) {
    if (!isNumeric(id)) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'ID must be a number',
      });
    }
    try {
      await this.bookingsService.confirmBooking(Number(id));
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
