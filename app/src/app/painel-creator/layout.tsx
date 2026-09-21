import CreatorSidebar from "@/components/creator-sidebar";

export default function PainelCreatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen min-h-screen overflow-hidden bg-app">
      <CreatorSidebar />
      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto pt-14 lg:pt-0">{children}</div>
    </div>
  );
}
