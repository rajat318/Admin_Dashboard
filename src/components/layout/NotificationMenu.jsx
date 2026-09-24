import { Bell } from "lucide-react";
import useDropdown from "../../hooks/useDropdown.js";
import { notifications } from "../../data/mockData.js";
import { typeIcons } from "../../data/typeIcons.js";

export default function NotificationMenu() {
  const { open, toggle, ref } = useDropdown();
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={toggle}
        aria-label={`Notifications, ${unreadCount} unread`}
        aria-expanded={open}
        aria-haspopup="true"
        className="relative rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        )}
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-[calc(100vw-2rem)] max-w-sm origin-top-right animate-pop rounded-xl border border-slate-200 bg-white shadow-lg sm:w-96">
          <div className="border-b border-slate-100 px-4 py-3 text-sm font-semibold">Notifications</div>
          <ul className="max-h-96 divide-y divide-slate-100 overflow-y-auto">
            {notifications.map(({ id, type, title, description, time, unread }) => {
              const { icon: Icon, className } = typeIcons[type];
              return (
                <li key={id} className="flex gap-3 px-4 py-3 hover:bg-slate-50">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${className}`}>
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-900">{title}</p>
                    <p className="truncate text-sm text-slate-500">{description}</p>
                    <p className="mt-0.5 text-xs text-slate-400">{time}</p>
                  </div>
                  {unread && <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-500" aria-label="Unread" />}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
