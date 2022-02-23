export interface NewAirport {
  name: string;
  address: string;
  city?: string;
  country?: string;
}

export interface Airport extends NewAirport {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export const parseAirport = (res: any): Airport => {
  return {
    id: res.airport_id,
    name: res.name,
    address: res.address,
    city: res.city,
    country: res.country,
    createdAt: res.created_at,
    updatedAt: res.updated_at,
  };
};
