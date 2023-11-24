import { Status } from "../status/Status";

export type Customer = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  orders?: Array<Status>;
  phone: string | null;
  updatedAt: Date;
};
