import { NewClient } from "../../../shared";
import { DB, printError } from "../../../util";

const createClient = (client: NewClient): number | null => {
  try {
    const res: any = DB.query(
      `INSERT INTO wings.client(
            name,
            document,
            phone_number,
            email
        ) VALUES (
            :name,
            :document,
            :phone_number,
            :email
        );
        `,
      client
    );

    if (!res[0]) return null;

    return res[0].insertId;
  } catch (error) {
    console.log(String(error));
    printError("Database error while creating client");
    return null;
  }
};

export { createClient };
