import React from 'react';
import { currencyFormatter } from '../../utils/currencyFormatter';

import './BookingCard.css';
import { Booking, Flexibility, BookingClass } from '../../../shared/interfaces';
import { getRefund } from '../../utils/getRefund';
import dayjs from 'dayjs';

interface BookingCardProps {
  booking: Booking;
}

const flexibilityMessages: Partial<Record<Flexibility, string>> = {
  [Flexibility.FLEXIBLE]: 'Flexible',
  [Flexibility.SEMI_FLEXIBLE]: 'Semi-flexible',
}
  
export function BookingCard({ booking }: BookingCardProps) {
  const formatter = currencyFormatter(booking.price.currency);

  const handleRefundClick = () => {
    try {
      const refund = getRefund(booking);
  
      if (refund) {
        alert(`Bookind refunded: You will receive ${formatter.format(refund)}, in the next days.`);
      }
    } catch (error) {
      alert('This booking is not refundable');
    }
  };

  return (
    <article className="booking-card">
      <header className="booking-card__header">
        <h3 className="header__title">
          <span>From: {booking.origin}</span>
          <span>To: {booking.destination}</span>
        </h3>
        <span className="header__price">
          <strong>Price: </strong>
          {formatter.format(booking.price.amount)}
        </span>
      </header>
      <div className="booking-card__body">
        <span>Carrier: <strong>{booking.carrier}</strong></span>
        {booking.class === BookingClass.FIRST && <span>First class</span>}
        {booking.flexibility !== Flexibility.NON_FLEXIBLE && (
          <span>{flexibilityMessages[booking.flexibility]}</span>
        )}
      Departure: {dayjs(booking.departureTime).fromNow()}
      </div>
      <footer className="booking-card__footer">
        <button className="booking-card__refund" onClick={handleRefundClick}>Refund</button>
      </footer>
    </article>
  );
}
