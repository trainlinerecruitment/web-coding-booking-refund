import dayjs from 'dayjs';
import { BookingClass, Carrier, Flexibility, Booking } from '../../shared/interfaces';

export const bookings: Booking[] = [
  {
    id: '1',
    origin: 'Roma Termini',
    destination: 'Latina',
    carrier: Carrier.ITALO,
    flexibility: Flexibility.NON_FLEXIBLE,
    class: BookingClass.FIRST,
    departureTime: dayjs().add(10, 'minutes').toDate(),
    price: {
        amount: 250,
        currency: 'EUR'
    }
  },
  {
    id: '2',
    origin: 'Pisa',
    destination: 'Milano centrale',
    carrier: Carrier.ITALO,
    flexibility: Flexibility.FLEXIBLE,
    class: BookingClass.FIRST,
    departureTime: dayjs().add(2, 'minutes').toDate(),
    price: {
        amount: 145.5,
        currency: 'EUR'
    }
  },
  {
    id: '3',
    origin: 'Paris Gare de Lyon',
    destination: 'Toulouse',
    carrier: Carrier.SNCF,
    flexibility: Flexibility.NON_FLEXIBLE,
    class: BookingClass.NORMAL,
    departureTime: dayjs().add(3, 'days').toDate(),
    price: {
        amount: 48.55,
        currency: 'GBP'
    }
  },
  {
    id: '4',
    origin: 'Padova',
    destination: 'Latina',
    carrier: Carrier.ITALO,
    flexibility: Flexibility.SEMI_FLEXIBLE,
    class: BookingClass.NORMAL,
    departureTime: dayjs().add(7, 'days').toDate(),
    price: {
        amount: 69.67,
        currency: 'GBP'
    }
  },
  {
    id: '5',
    origin: 'Paris Gare de Lyon',
    destination: 'Toulouse',
    carrier: Carrier.SNCF,
    flexibility: Flexibility.SEMI_FLEXIBLE,
    class: BookingClass.FIRST,
    departureTime: dayjs().add(10, 'days').toDate(),
    price: {
        amount: 48.55,
        currency: 'GBP'
    }
  },
  {
    id: '6',
    origin: 'Barcelona',
    destination: 'Madrid',
    carrier: Carrier.RENFE,
    flexibility: Flexibility.NON_FLEXIBLE,
    class: BookingClass.FIRST,
    departureTime: dayjs().add(8, 'days').toDate(),
    price: {
        amount: 90.25,
        currency: 'EUR'
    }
  },
  {
    id: '7',
    origin: 'Barcelona',
    destination: 'Madrid',
    carrier: Carrier.RENFE,
    flexibility: Flexibility.SEMI_FLEXIBLE,
    class: BookingClass.FIRST,
    departureTime: dayjs().add(5, 'hours').toDate(),
    price: {
        amount: 90.25,
        currency: 'EUR'
    }
  },
  {
    id: '8',
    origin: 'Barcelona',
    destination: 'Madrid',
    carrier: Carrier.RENFE,
    flexibility: Flexibility.SEMI_FLEXIBLE,
    class: BookingClass.FIRST,
    departureTime: dayjs().add(3, 'hours').toDate(),
    price: {
        amount: 90.25,
        currency: 'EUR'
    }
  },
];
