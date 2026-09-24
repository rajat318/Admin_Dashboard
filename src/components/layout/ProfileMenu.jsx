import { ChevronDown, User, Settings, LogOut } from "lucide-react";
import Avatar from "../common/Avatar.jsx";
import useDropdown from "../../hooks/useDropdown.js";
import { currentUser } from "../../data/mockData.js";

const menuItems = [
  { label: "View profile", icon: User },
  { label: "Settings", icon: Settings },
  { label: "Sign out", icon: LogOut },
];

export default function ProfileMenu() {
  const { open, toggle, ref } = useDropdown();

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Open profile menu"
        className="flex items-center gap-2 rounded-lg p-1.5 transition-colors hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        <Avatar name={currentUser.name} size="sm" />
        <span className="hidden text-sm font-medium text-slate-700 sm:inline">{currentUser.name}</span>
        <ChevronDown className={`hidden h-4 w-4 text-slate-400 transition-transform sm:block ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 w-56 origin-top-right animate-pop rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
          <div className="border-b border-slate-100 px-3 py-2">
            <p className="text-sm font-medium">{currentUser.name}</p>
            <p className="truncate text-xs text-slate-500">{currentUser.email}</p>
          </div>
          {menuItems.map(({ label, icon: Icon }) => (
            <button
              key={label}
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 focus:outline-none focus-visible:bg-slate-50"
            >
              <Icon className="h-4 w-4 text-slate-400" aria-hidden="true" />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
