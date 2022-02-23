export interface NewSeat {
  name: string;
}

export interface Seat extends NewSeat {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export const parseSeat = (res: any): Seat => {
  return {
    id: res.seat_id,
    name: res.name,
    createdAt: res.created_at,
    updatedAt: res.updated_at,
  };
};
