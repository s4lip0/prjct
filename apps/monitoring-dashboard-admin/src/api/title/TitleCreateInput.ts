import { OrderCreateNestedManyWithoutTitlesInput } from "./OrderCreateNestedManyWithoutTitlesInput";

export type TitleCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutTitlesInput;
};
