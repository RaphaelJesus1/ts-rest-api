import { Router } from "express";
import FlightRouter from "./Flight";
const root = Router();

root.use("/flight", FlightRouter);

export default root;
