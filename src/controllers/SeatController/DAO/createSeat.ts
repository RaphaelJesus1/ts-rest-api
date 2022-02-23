import { NewSeat } from "../../../shared";
import { DB, printError } from "../../../util";

const createSeat = (seat: NewSeat): number | null => {
  try {
    const res: any = DB.query(
      `INSERT INTO wings.seat(
            identifier
        ) VALUES (
            :identifier
        );
        `,
      seat
    );

    if (!res[0]) return null;

    return res[0].insertId;
  } catch (error) {
    console.log(String(error));
    printError("Database error while creating seat");
    return null;
  }
};

export { createSeat };
