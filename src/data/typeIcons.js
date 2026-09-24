import { ShoppingCart, UserPlus, CreditCard, RefreshCw } from "lucide-react";

// Shared by ActivityList and the notification menu.
export const typeIcons = {
  order: { icon: ShoppingCart, className: "bg-indigo-50 text-indigo-600" },
  user: { icon: UserPlus, className: "bg-emerald-50 text-emerald-600" },
  payment: { icon: CreditCard, className: "bg-amber-50 text-amber-600" },
  system: { icon: RefreshCw, className: "bg-slate-100 text-slate-600" },
};
