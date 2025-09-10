import { Request, Response } from 'express';

import { Booking } from '../../shared/interfaces';
import { bookings } from '../fixtures/bookings';

/**
 * A simple request handler example, returning the entire list of mocked bookings.
 */
export default (_req: Request, res: Response<Booking[]>) => res.json(bookings);
