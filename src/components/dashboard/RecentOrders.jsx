import Badge from "../common/Badge.jsx";

const statusVariant = { Completed: "success", Pending: "warning", Cancelled: "danger" };

export default function RecentOrders({ orders, query }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 p-5">
        <h2 className="text-base font-semibold">Recent orders</h2>
        <p className="text-sm text-slate-500">
          {query ? `${orders.length} result${orders.length === 1 ? "" : "s"} for "${query}"` : "Latest transactions from your store"}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              {["Order ID", "Customer", "Product", "Date", "Amount", "Status"].map((h) => (
                <th key={h} scope="col" className="px-5 py-3 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orders.map((o) => (
              <tr key={o.id} className="transition-colors hover:bg-slate-50">
                <td className="px-5 py-3 font-medium text-slate-900">{o.id}</td>
                <td className="px-5 py-3">{o.customer}</td>
                <td className="px-5 py-3 text-slate-600">{o.product}</td>
                <td className="whitespace-nowrap px-5 py-3 text-slate-600">{o.date}</td>
                <td className="px-5 py-3 font-medium">{o.amount}</td>
                <td className="px-5 py-3"><Badge variant={statusVariant[o.status]}>{o.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <p className="px-5 py-10 text-center text-sm text-slate-500">
            No orders match your search. Try a different name, product or status.
          </p>
        )}
      </div>
    </section>
  );
}
