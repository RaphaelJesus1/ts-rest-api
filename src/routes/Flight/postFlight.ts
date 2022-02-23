import { Request, Response } from "express";
import { FlightController } from "../../controllers/FlightController";
import { printError } from "../../util";

const postFlight = (req: Request, res: Response) => {
  try {
    const flight = req.body;

    console.log(req);

    if (
      flight.departureTime ||
      flight.arrivalTime ||
      flight.originAirportId ||
      flight.finalAirportId ||
      flight.seatAmount
    ) {
      return res.status(400).end({ message: "Missing params" });
    }

    const flightId = FlightController.DAO.createFlight(flight);

    if (!flightId) {
      return res.status(500);
    }
    return res.status(201);
  } catch (error) {
    console.log(String(error), { body: req.body });
    printError("Couldn't create flight");
  }
};

export { postFlight };
