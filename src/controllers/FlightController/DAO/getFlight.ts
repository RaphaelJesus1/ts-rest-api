import { Flight, parseFlight } from "../../../shared";
import { DB, printError } from "../../../util";

interface ParamFilter {
  [index: string]: string;
}

const FILTERS = {
  id: "flight_id = :id",
  originAirportId: "origin_airport_id = :originAirportId",
  finalAirportId: "final_airport_id = :finalAirportId",
} as ParamFilter;

const buildFilter = (params: ParamFilter): string => {
  const filters = Object.keys(params).map((key) => FILTERS[key]);

  return filters.join(" AND ");
};

const getFlight = (params: ParamFilter): Flight[] | null => {
  try {
    const res: any = DB.query(
      `SELECT
            *
        FROM
            wings.flight
        WHERE
            ${buildFilter(params)}
        ;`,
      params
    );

    if (!res[0][0]) {
      return [];
    }
    return res[0][0].map((flight: Flight) => parseFlight(flight));
  } catch (error) {
    console.log(String(error));
    printError("Error while getting flight");
    return null;
  }
};

export { getFlight };
