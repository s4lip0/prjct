import { StatusCreateNestedManyWithoutTitlesInput } from "./StatusCreateNestedManyWithoutTitlesInput";

export type TitleCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: StatusCreateNestedManyWithoutTitlesInput;
};
