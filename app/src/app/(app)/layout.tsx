import Sidebar from "@/components/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen min-h-screen overflow-hidden bg-app">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">{children}</div>
    </div>
  );
}
