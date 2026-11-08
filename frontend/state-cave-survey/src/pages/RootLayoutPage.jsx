import { Outlet } from "react-router";

import MainNavigation from "../components/custom/MainNavigation";

// Shared by the nav bar and page content so their edges line up
const PAGE_WIDTH = "mx-auto max-w-6xl px-6";

export default function RootLayoutPage() {
  return (
    <>
      <header className="border-b bg-background">
        <MainNavigation className={PAGE_WIDTH} />
      </header>
      <main className={`${PAGE_WIDTH} py-8`}>
        <Outlet />
      </main>
    </>
  );
}
