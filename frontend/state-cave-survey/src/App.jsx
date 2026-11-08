import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import RootLayoutPage from "./pages/RootLayoutPage";
import CavesPage from "./pages/CavesPage";
import TripsPage from "./pages/TripsPage";
import PeoplePage from "./pages/PeoplePage";

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
  return <RouterProvider router={router} />;
}
