# Admin Dashboard

A responsive SaaS-style admin dashboard built with React, Vite and Tailwind CSS. Built as a Week 1 internship project using local mock data (no backend).

## Features

- Sidebar with 7 navigation items and an active state; compact icon-only on tablets, slide-in drawer on mobile
- Sticky header with search bar, notification dropdown and profile dropdown
- Four reusable stat cards (revenue, users, orders, conversion rate) with positive/negative trend indicators
- Bar chart of monthly revenue (plain CSS, no chart library)
- Recent orders table with status badges, horizontal scroll on small screens
- Client-side search that filters the orders table by ID, customer, product or status
- Recent activity list and user profile card with completion progress
- Subtle animations (page fade-in, dropdown pop, card hover, drawer slide) that respect `prefers-reduced-motion`
- Basic accessibility: semantic HTML, aria labels, visible focus states, Escape closes dropdowns

## Tech stack

React, Vite, JavaScript, Tailwind CSS v4, Lucide React

## Project structure

```
src/
├── components/
│   ├── common/      Button, Badge, Avatar, SearchBar
│   ├── dashboard/   StatCard, RevenueChart, RecentOrders, ActivityList, UserProfileCard
│   └── layout/      DashboardLayout, Sidebar, Header, NotificationMenu, ProfileMenu
├── data/            mockData.js, navigation.js, typeIcons.js
├── hooks/           useDropdown.js
├── pages/           Dashboard.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

```bash
git clone <your-repo-url>
cd admin-dashboard
npm install
```

## Running locally

```bash
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # preview the production build
```

## Screenshots

_Add screenshots here (desktop, tablet, mobile)._

## Live demo

_Add your deployed URL here._

## GitHub repository

_Add your repository link here._

## Known limitations

- Sidebar navigation only changes the active item; only the Dashboard page exists
- All data is static mock data; notifications are not marked as read
- Profile menu items are visual only

## Future improvements

- Routing with React Router and additional pages
- Real chart library and date filters
- Sorting and pagination for the orders table
- Dark mode
- Mark-as-read for notifications
