import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import ErrorFallback from "@src/components/ErrorFallback/ErrorFallback";
import AppLayout from "@src/layouts/AppLayout/AppLayout";

const StoriesPage = lazy(() => import("@src/pages/Stories/StoriesPage"));
const StoryPage = lazy(() => import("@src/pages/Story/StoryPage"));
const NotFoundPage = lazy(() => import("@src/pages/NotFound/NotFoundPage"));

export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorFallback />,
    children: [
      {
        path: "/",
        element: <StoriesPage />
      },
      {
        path: "/:newsId",
        element: <StoryPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
];

const router = createBrowserRouter(routes);

export default router;
export type TRouter = typeof router;
