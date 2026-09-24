import { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";

export default function DashboardLayout({ query, onQueryChange, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="md:pl-20 lg:pl-64">
        <Header query={query} onQueryChange={onQueryChange} onMenuClick={() => setSidebarOpen(true)} />
        <main className="mx-auto max-w-7xl animate-fade-up p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
