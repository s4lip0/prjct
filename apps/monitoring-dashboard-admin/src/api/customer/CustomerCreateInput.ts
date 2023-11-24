import { StatusCreateNestedManyWithoutCustomersInput } from "./StatusCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: StatusCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
};
