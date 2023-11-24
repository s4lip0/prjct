import { OrderUpdateManyWithoutTitlesInput } from "./OrderUpdateManyWithoutTitlesInput";

export type TitleUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutTitlesInput;
};
