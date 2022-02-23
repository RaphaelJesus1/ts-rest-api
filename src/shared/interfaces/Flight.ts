import { Airport } from ".";

export interface NewFlight {
  departureTime: string;
  arrivalTime: string;
  originAirportId: Airport["id"];
  finalAirportId: Airport["id"];
  seatAmount: number;
  ticketPrice?: number;
}

export interface Flight extends NewFlight {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export const parseFlight = (res: any): Flight => {
  return {
    id: res.flight_id,
    departureTime: res.departure_time,
    arrivalTime: res.arrival_time,
    originAirportId: res.origin_airport_id,
    finalAirportId: res.final_airport_id,
    seatAmount: res.seat_amount,
    ticketPrice: res.ticket_price,
    createdAt: res.created_at,
    updatedAt: res.updated_at,
  };
};
