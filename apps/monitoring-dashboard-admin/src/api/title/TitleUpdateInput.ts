import { StatusUpdateManyWithoutTitlesInput } from "./StatusUpdateManyWithoutTitlesInput";

export type TitleUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: StatusUpdateManyWithoutTitlesInput;
};
