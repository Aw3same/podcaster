import { Outlet } from "react-router-dom";

export function CommonLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header>header</header>
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}
