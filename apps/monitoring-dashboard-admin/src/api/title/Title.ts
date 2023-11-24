import { Status } from "../status/Status";

export type Title = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Status>;
  updatedAt: Date;
};
