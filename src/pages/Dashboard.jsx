import { useMemo } from "react";
import StatCard from "../components/dashboard/StatCard.jsx";
import RevenueChart from "../components/dashboard/RevenueChart.jsx";
import RecentOrders from "../components/dashboard/RecentOrders.jsx";
import ActivityList from "../components/dashboard/ActivityList.jsx";
import UserProfileCard from "../components/dashboard/UserProfileCard.jsx";
import { stats, revenueData, orders, activities, currentUser } from "../data/mockData.js";

export default function Dashboard({ query }) {
  const filteredOrders = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return orders;
    return orders.filter((o) =>
      [o.id, o.customer, o.product, o.status].some((field) => field.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-slate-500">Welcome back, {currentUser.name.split(" ")[0]}. Here is what is happening today.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ id, ...stat }) => <StatCard key={id} {...stat} />)}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2"><RevenueChart data={revenueData} /></div>
        <UserProfileCard user={currentUser} />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="min-w-0 xl:col-span-2"><RecentOrders orders={filteredOrders} query={query} /></div>
        <ActivityList activities={activities} />
      </div>
    </div>
  );
}
