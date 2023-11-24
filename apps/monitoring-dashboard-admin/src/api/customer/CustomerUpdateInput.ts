import { StatusUpdateManyWithoutCustomersInput } from "./StatusUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: StatusUpdateManyWithoutCustomersInput;
  phone?: string | null;
};
