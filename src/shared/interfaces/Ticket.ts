import { Client, Flight, Seat } from ".";

export interface NewTicket {
  flightId: Flight["id"];
  clientId: Client["id"];
  seatId: Seat["id"];
  purchaseDate?: Date;
}

export interface Ticket extends NewTicket {
  id: number;
  purchaseDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const parseTicket = (res: any): Ticket => {
  return {
    id: res.seat_id,
    flightId: res.flight_id,
    clientId: res.client_id,
    seatId: res.seat_id,
    purchaseDate: res.purchaseDate,
    createdAt: res.created_at,
    updatedAt: res.updated_at,
  };
};
