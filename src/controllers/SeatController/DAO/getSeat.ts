import { parseSeat, Seat } from "../../../shared";
import { DB, printError } from "../../../util";

interface ParamFilter {
  [index: string]: string;
}

const FILTERS = {
  id: "seat_id = :id",
  identifier: "identifier = :identifier",
  flightId: "flight_id = :flight_id",
  available: "available = :available",
} as ParamFilter;

const buildFilter = (params: ParamFilter): string => {
  const filters = Object.keys(params).map((key) => FILTERS[key]);

  return filters.join(" AND ");
};

const SELECTORS = {
  available: "f.flight_id",
  flightId: "fs.available",
} as ParamFilter;

const buildSelector = (params: ParamFilter): string => {
  const filters = Object.keys(params).map((key) => SELECTORS[key]);

  if (filters) return filters.join(", ");
  return "";
};

const getSeat = (params: ParamFilter): Seat[] | null => {
  try {
    const res: any = DB.query(
      `SELECT
            s.seat_id, s.identifier ${buildSelector(params)}
        FROM
            wings.seat s
        INNER JOIN wings.flight_seat fs
            ON s.seat_id = fs.seat_id
        INNER JOIN wings.flight f
            ON f.flight_id = fs.flight_id
        WHERE
            ${buildFilter(params)}
        ;`,
      params
    );

    if (!res[0][0]) {
      return [];
    }
    return res[0][0].map((seat: Seat) => parseSeat(seat));
  } catch (error) {
    console.log(String(error));
    printError("Database error while getting seat");
    return null;
  }
};

export { getSeat };
