import { typeIcons } from "../../data/typeIcons.js";

export default function ActivityList({ activities }) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-base font-semibold">Recent activity</h2>
      <ul className="mt-4 space-y-4">
        {activities.map(({ id, type, text, time }) => {
          const { icon: Icon, className } = typeIcons[type];
          return (
            <li key={id} className="flex items-start gap-3">
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${className}`}>
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-slate-800">{text}</p>
                <p className="text-xs text-slate-400">{time}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
