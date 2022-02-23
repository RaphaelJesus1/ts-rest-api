import { Router } from "express";
import { postFlight } from "./postFlight";
const FlightRouter = Router();

FlightRouter.post("/create", postFlight);

export default FlightRouter;
