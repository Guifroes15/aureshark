import Sidebar from "@/components/sidebar";
import { PostsProvider } from "@/lib/posts-store";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <PostsProvider>
      <div className="flex h-screen min-h-screen overflow-hidden bg-app">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">{children}</div>
      </div>
    </PostsProvider>
  );
}
