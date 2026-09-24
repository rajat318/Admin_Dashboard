# Admin Dashboard

A responsive SaaS-style admin dashboard built with **React**, **Vite** and **Tailwind CSS**. Built as a Week 1 internship project using local mock data (no backend).

## Live Demo

_Coming soon. Add your deployed URL here after deployment._



## Features

- Sidebar with 7 navigation items and an active state
  - Full sidebar on desktop, compact icon-only sidebar on tablet, slide-in drawer on mobile
- Sticky header with search bar, notification dropdown and profile dropdown
- Four reusable stat cards (revenue, users, orders, conversion rate) with positive/negative trend indicators
- Bar chart of monthly revenue (plain CSS, no chart library)
- Recent orders table with reusable status badges, horizontally scrollable on small screens
- Client-side search that filters the orders table by ID, customer, product or status
- Recent activity list and user profile card with a completion progress bar
- Subtle animations (page fade-in, dropdown pop, card hover, drawer slide) that respect `prefers-reduced-motion`
- Basic accessibility: semantic HTML, aria labels, visible focus states, Escape closes dropdowns

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI components and hooks |
| Vite | Build tool and dev server |
| JavaScript | Language |
| Tailwind CSS v4 | Styling |
| Lucide React | Icons |

## Project Structure

```
Admin_Dashboard/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/      # Button, Badge, Avatar, SearchBar
│   │   ├── dashboard/   # StatCard, RevenueChart, RecentOrders,
│   │   │                # ActivityList, UserProfileCard
│   │   └── layout/      # DashboardLayout, Sidebar, Header,
│   │                    # NotificationMenu, ProfileMenu
│   ├── data/            # mockData.js, navigation.js, typeIcons.js
│   ├── hooks/           # useDropdown.js
│   ├── pages/           # Dashboard.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Installation

Requires **Node.js 20.19+ or 22.12+**.

```bash
git clone https://github.com/rajat318/Admin_Dashboard.git
cd Admin_Dashboard
npm install
```

## Running Locally

```bash
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # preview the production build
```

## GitHub Repository

https://github.com/rajat318/Admin_Dashboard

## Known Limitations

- Only the Dashboard page exists; clicking other sidebar items only changes the active item
- All data is static mock data
- Notifications are not marked as read
- Profile menu items are visual only

## Future Improvements

- Routing with React Router and additional pages
- Real chart library and date filters
- Sorting and pagination for the orders table
- Dark mode
- Mark-as-read for notifications

## Author

**Rajat Banerjee**
GitHub: [@rajat318](https://github.com/rajat318)
