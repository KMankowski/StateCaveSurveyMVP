import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import RootLayoutPage from "./pages/RootLayoutPage";
import CavesPage, { cavesLoader } from "./pages/CavesPage";
import TripsPage from "./pages/TripsPage";
import PeoplePage from "./pages/PeoplePage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/caves" replace />,
      },
      {
        path: "caves",
        element: <CavesPage />,
        loader: () => cavesLoader(queryClient),
      },
      {
        path: "trips",
        element: <TripsPage />,
      },
      {
        path: "people",
        element: <PeoplePage />,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
