import { createBrowserRouter } from "react-router";
import { BusinessDashboard } from "./pages/business/Dashboard";
import { BusinessProducts } from "./pages/business/Products";
import { BusinessOrders } from "./pages/business/Orders";
import { BusinessLeads } from "./pages/business/Leads";
import { BusinessPayments } from "./pages/business/Payments";
import { BusinessAISettings } from "./pages/business/AISettings";
import { BusinessAnalytics } from "./pages/business/Analytics";
import { BusinessSettings } from "./pages/business/Settings";
import { AdminBusinesses } from "./pages/admin/Businesses";
import { AdminSubscriptions } from "./pages/admin/Subscriptions";
import { AdminAnalytics } from "./pages/admin/Analytics";
import { AdminAIConfig } from "./pages/admin/AIConfig";
import { AdminSupport } from "./pages/admin/Support";
import { AdminOrderLogs } from "./pages/admin/OrderLogs";
import { AdminSettings } from "./pages/admin/Settings";
import { BusinessLayout } from "./layouts/BusinessLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { LandingPage } from "./pages/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/business",
    Component: BusinessLayout,
    children: [
      { index: true, Component: BusinessDashboard },
      { path: "products", Component: BusinessProducts },
      { path: "orders", Component: BusinessOrders },
      { path: "leads", Component: BusinessLeads },
      { path: "payments", Component: BusinessPayments },
      { path: "ai-settings", Component: BusinessAISettings },
      { path: "analytics", Component: BusinessAnalytics },
      { path: "settings", Component: BusinessSettings },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { index: true, Component: AdminBusinesses },
      { path: "subscriptions", Component: AdminSubscriptions },
      { path: "analytics", Component: AdminAnalytics },
      { path: "ai-config", Component: AdminAIConfig },
      { path: "support", Component: AdminSupport },
      { path: "order-logs", Component: AdminOrderLogs },
      { path: "settings", Component: AdminSettings },
    ],
  },
]);
