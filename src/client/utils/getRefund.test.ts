import dayjs from 'dayjs';
import {
  Booking,
  BookingClass,
  Carrier,
  Flexibility,
} from '../../shared/interfaces';
import { getRefund } from './getRefund';
import { NoRefundableError } from '../../shared/errors';

describe('getRefund', () => {
  it('should not be refundable when the booking is not flexible', () => {
    const booking: Booking = {
      id: '1',
      origin: 'ORIGIN',
      destination: 'DESTINATION',
      departureTime: dayjs(new Date()).add(5, 'minutes').toDate(),
      class: BookingClass.FIRST,
      carrier: Carrier.ITALO,
      flexibility: Flexibility.NON_FLEXIBLE,
      price: {
        amount: 100,
        currency: 'GBP',
      },
    };

    expect(() => getRefund(booking)).toThrow(NoRefundableError);
  });
});
