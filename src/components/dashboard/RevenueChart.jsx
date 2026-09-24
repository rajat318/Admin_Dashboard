export default function RevenueChart({ data }) {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base font-semibold">Revenue overview</h2>
      <p className="text-sm text-slate-500">Monthly revenue for 2026</p>

      <div
        role="img"
        aria-label={`Bar chart of monthly revenue, from ${data[0].month} to ${data[data.length - 1].month}`}
        className="mt-6 flex h-52 items-end gap-2 sm:gap-4"
      >
        {data.map(({ month, value }) => (
          <div key={month} className="group flex h-full flex-1 flex-col items-center justify-end gap-2">
            <span className="text-xs font-medium text-slate-700 opacity-0 transition-opacity group-hover:opacity-100">
              ${(value / 1000).toFixed(1)}k
            </span>
            <div
              className="w-full rounded-t-md bg-indigo-500 transition-colors group-hover:bg-indigo-600"
              style={{ height: `${(value / max) * 80}%` }}
            />
            <span className="text-xs text-slate-500">{month}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
