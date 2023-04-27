import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@src/layouts/AppLayout/AppLayout";

// import NewsPage from "@src/components/pages/News/NewsPage";
// import NewsItemPage from "@src/components/pages/NewsItem/NewsItemPage";

const NewsPage = lazy(() => import("@src/pages/Stories/StoriesPage"));
const NewsItemPage = lazy(() => import("@src/pages/Story/StoryPage"));
const NotFoundPage = lazy(() => import("@src/pages/NotFound/NotFoundPage"));

export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <NewsPage />
      },
      {
        path: "/:newsId",
        element: <NewsItemPage />
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
