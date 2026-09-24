import { DollarSign, Users, ShoppingBag, TrendingUp } from "lucide-react";

export const currentUser = {
  name: "Rajat Banerjee",
  email: "rajat@example.com",
  role: "Administrator",
  completion: 78,
};

export const stats = [
  { id: 1, title: "Total Revenue", value: "$24,560", change: "+12.5%", trend: "up", icon: DollarSign },
  { id: 2, title: "Total Users", value: "8,249", change: "+8.2%", trend: "up", icon: Users },
  { id: 3, title: "Total Orders", value: "1,432", change: "-3.1%", trend: "down", icon: ShoppingBag },
  { id: 4, title: "Conversion Rate", value: "3.6%", change: "+0.8%", trend: "up", icon: TrendingUp },
];

export const revenueData = [
  { month: "Jan", value: 12400 }, { month: "Feb", value: 15800 },
  { month: "Mar", value: 14200 }, { month: "Apr", value: 18900 },
  { month: "May", value: 17300 }, { month: "Jun", value: 21500 },
  { month: "Jul", value: 19800 }, { month: "Aug", value: 24560 },
];

export const orders = [
  { id: "#ORD-1042", customer: "Aarav Sharma", product: "Pro Plan (Annual)", date: "Sep 22, 2026", amount: "$299.00", status: "Completed" },
  { id: "#ORD-1041", customer: "Priya Das", product: "Team Seats x5", date: "Sep 22, 2026", amount: "$145.00", status: "Pending" },
  { id: "#ORD-1040", customer: "Liam Carter", product: "Starter Plan", date: "Sep 21, 2026", amount: "$29.00", status: "Completed" },
  { id: "#ORD-1039", customer: "Sofia Rossi", product: "Analytics Add-on", date: "Sep 21, 2026", amount: "$79.00", status: "Cancelled" },
  { id: "#ORD-1038", customer: "Noah Kim", product: "Pro Plan (Monthly)", date: "Sep 20, 2026", amount: "$39.00", status: "Completed" },
  { id: "#ORD-1037", customer: "Ananya Sen", product: "Enterprise Trial", date: "Sep 19, 2026", amount: "$0.00", status: "Pending" },
  { id: "#ORD-1036", customer: "Ethan Brown", product: "Storage 100GB", date: "Sep 19, 2026", amount: "$12.00", status: "Completed" },
  { id: "#ORD-1035", customer: "Mia Chen", product: "Team Seats x10", date: "Sep 18, 2026", amount: "$290.00", status: "Completed" },
];

export const activities = [
  { id: 1, type: "order", text: "Aarav Sharma placed order #ORD-1042", time: "5 min ago" },
  { id: 2, type: "user", text: "New user Priya Das registered", time: "32 min ago" },
  { id: 3, type: "payment", text: "Payment of $299.00 received", time: "1 hour ago" },
  { id: 4, type: "system", text: "Server maintenance completed", time: "3 hours ago" },
  { id: 5, type: "order", text: "Order #ORD-1039 was cancelled", time: "Yesterday" },
];

export const notifications = [
  { id: 1, type: "order", title: "New order received", description: "Order #ORD-1042 from Aarav Sharma", time: "5 min ago", unread: true },
  { id: 2, type: "user", title: "New user registered", description: "Priya Das joined the platform", time: "32 min ago", unread: true },
  { id: 3, type: "payment", title: "Payment completed", description: "$299.00 payment was processed", time: "1 hour ago", unread: false },
  { id: 4, type: "system", title: "System update", description: "Version 2.4 is now live", time: "Yesterday", unread: false },
];
