import { Menu } from "lucide-react";
import SearchBar from "../common/SearchBar.jsx";
import NotificationMenu from "./NotificationMenu.jsx";
import ProfileMenu from "./ProfileMenu.jsx";

export default function Header({ query, onQueryChange, onMenuClick }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open menu"
        className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="max-w-md flex-1">
        <SearchBar value={query} onChange={onQueryChange} />
      </div>

      <div className="ml-auto flex items-center gap-1 sm:gap-2">
        <NotificationMenu />
        <ProfileMenu />
      </div>
    </header>
  );
}
