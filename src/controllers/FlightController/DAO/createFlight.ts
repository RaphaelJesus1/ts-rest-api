import { NewFlight } from "../../../shared";
import { DB, printError } from "../../../util";

const createFlight = (flight: NewFlight): number | null => {
  try {
    const res: any = DB.query(
      `INSERT INTO wings.flight(
            departure_time,
            arrival_time,
            origin_airport_id,
            final_airport_id,
            seat_amount,
            ticket_price
        ) VALUES (
            :departureTime,
            :arrivalTime,
            :originAirportId,
            :finalAirportId,
            :seatAmount,
            :ticketPrice
        )
        ;`,
      flight
    );

    if (!res) return null;

    return res[0].insertId;
  } catch (error) {
    console.log(String(error));
    printError("Database error while creating new flight");
    return null;
  }
};

export { createFlight };
