import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({ title, value, change, trend, icon: Icon }) {
  const isUp = trend === "up";
  const TrendIcon = isUp ? ArrowUpRight : ArrowDownRight;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
      <p className={`mt-1 flex items-center gap-1 text-sm font-medium ${isUp ? "text-emerald-600" : "text-red-600"}`}>
        <TrendIcon className="h-4 w-4" aria-hidden="true" />
        {change}
        <span className="font-normal text-slate-400">vs last month</span>
      </p>
    </div>
  );
}
