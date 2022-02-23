import { Flight } from ".";

export interface NewSeat {
  identifier: string;
}

export interface Seat extends NewSeat {
  id: number;
  flightId?: Flight["id"];
  available?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const parseSeat = (res: any): Seat => {
  return {
    id: res.seat_id,
    identifier: res.identifier,
    flightId: res.flight_id,
    available: res.available,
    createdAt: res.created_at,
    updatedAt: res.updated_at,
  };
};
