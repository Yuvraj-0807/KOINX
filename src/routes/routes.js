// import { RequireAuth } from "@/components";
// import { routes as userAuthRoutes } from "@/features/user/auth";
// import { routes as userDashboardRoutes } from "@/features/user/dashboard";
// import { routes as websiteRoutes } from "@/features/website";

import { LandingPageLayout } from "../layouts";

// import { ROUTES } from "@/utils";
// import { ROUTES } from '@/utils/routes-contants';
export const routes = [
  {
    path: "/",
    element: <LandingPageLayout />,
    // children: [...websiteRoutes],
  },
  /* ============================================
   * USER ROUTES
   * ============================================ */
  // {
  //   path: "/",
  //   children: [
  //     // User Routes
  //     {
  //       path: "auth",
  //       // children: [...userAuthRoutes],
  //     },

  //     {
  //       path: "dashboard",
  //       element: (
  //         <RequireAuth to={ROUTES.USER.AUTH.LOGIN}>
  //           <UserDashboardLayout />
  //         </RequireAuth>
  //       ),
  //       children: [...userDashboardRoutes],
  //     },
  //   ],
  // errorElement: <div>Error 404</div>,
  // },
];
