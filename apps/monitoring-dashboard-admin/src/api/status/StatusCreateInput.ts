import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TitleWhereUniqueInput } from "../title/TitleWhereUniqueInput";

export type StatusCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  product?: TitleWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
