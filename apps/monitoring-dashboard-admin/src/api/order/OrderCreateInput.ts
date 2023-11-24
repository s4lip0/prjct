import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { TitleWhereUniqueInput } from "../title/TitleWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  product?: TitleWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
