import { useState } from "react";
import DashboardLayout from "./components/layout/DashboardLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <DashboardLayout query={query} onQueryChange={setQuery}>
      <Dashboard query={query} />
    </DashboardLayout>
  );
}
