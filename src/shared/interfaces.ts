export enum Carrier {
  ITALO = 'Italo',
  SNCF = 'SNCF',
  RENFE = 'Renfe'
}

export enum BookingClass {
  NORMAL,
  FIRST
}

export enum Flexibility {
  NON_FLEXIBLE,
  SEMI_FLEXIBLE,
  FLEXIBLE
}

export interface Price {
  amount: number;
  currency: string;
}

export interface Booking {
  id: string;
  price: Price;
  origin: string;
  destination: string;
  carrier: Carrier;
  class: BookingClass;
  departureTime: Date;
  flexibility: Flexibility;
}
