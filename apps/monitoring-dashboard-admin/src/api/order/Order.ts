import { Customer } from "../customer/Customer";
import { Title } from "../title/Title";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  product?: Title | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
