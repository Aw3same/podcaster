import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { Outlet } from "react-router-dom";

export function CommonLayout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="flex-1 p-8 max-w-screen-2xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
