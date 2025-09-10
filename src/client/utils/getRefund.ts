import { NoRefundableError } from '../../shared/errors';
import { Carrier, Flexibility, Booking } from '../../shared/interfaces';
import { getTime } from './getTime';

export function getRefund(booking: Booking) {
    const now = Date.now();

    if ((getTime(booking.departureTime) - now) > 0 && (getTime(booking.departureTime) - now) <= 180000) {
        throw new NoRefundableError();
    } else if (booking.flexibility === Flexibility.NON_FLEXIBLE) {
        throw new NoRefundableError();
    } else {
        if (180000 < (getTime(booking.departureTime) - now)) {
            if (booking.flexibility === Flexibility.SEMI_FLEXIBLE) {

                if (booking.carrier === Carrier.ITALO) {
                    return booking.price.amount * 0.6;
                } else {
                    return (booking.price.amount * 0.7) - 2;
                }
            } else if (booking.flexibility === Flexibility.FLEXIBLE) {
                if (booking.carrier === Carrier.ITALO) {
                    return booking.price.amount * 0.8;
                } else {
                    return (booking.price.amount * 0.9) - 2;
                }
            }
        } else {
            throw new NoRefundableError();
        }
    }
}
