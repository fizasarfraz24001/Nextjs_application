// pages/dashboardLayout.tsx
import Customnav from "@/components/customnav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Customnav />
      <main className="ml-64 p-4 flex-grow">
        {children}
      </main>
    </div>
  );
}
