export interface NewClient {
  name?: string;
  document: string;
  phoneNumber?: string;
  email?: string;
}

export interface Client extends NewClient {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export const parseClient = (res: any): Client => {
  return {
    id: res.seat_id,
    name: res.name,
    document: res.document,
    phoneNumber: res.phone_number,
    email: res.email,
    createdAt: res.created_at,
    updatedAt: res.updated_at,
  };
};
