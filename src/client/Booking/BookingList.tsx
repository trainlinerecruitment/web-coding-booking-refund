import { Booking } from '../../shared/interfaces';

import './BookingList.css';
import { BookingCard } from './BookingCard/BookingCard';

interface BookingListProps {
  bookingList: Booking[];
}

export function BookingList({ bookingList }: BookingListProps) {
  return (
    <section className="booking-list">
      {Boolean(bookingList.length) &&
        bookingList.map((booking) => (
          <BookingCard key={booking.id} booking={booking} />
        ))}
    </section>
  );
}
