import { Client, parseClient } from "../../../shared";
import { DB, printError } from "../../../util";

interface ParamFilter {
  [index: string]: string;
}

const FILTERS = {
  id: "client_id = :id",
  document: "document = :document",
  phoneNumber: "phone_number = :phoneNumber",
  email: "email = :email",
} as ParamFilter;

const buildFilter = (params: ParamFilter): string => {
  const filters = Object.keys(params).map((key) => FILTERS[key]);

  return filters.join(" AND ");
};

const getClient = (params: ParamFilter): Client[] | null => {
  try {
    const res: any = DB.query(
      `SELECT
            *
        FROM
            wings.client
        WHERE
            ${buildFilter(params)}
        ;`,
      params
    );

    if (!res[0][0]) {
      return [];
    }
    return res[0][0].map((client: Client) => parseClient(client));
  } catch (error) {
    console.log(String(error));
    printError("Error while getting client");
    return null;
  }
};

export { getClient };
