import Sidebar from "@/components/sidebar";
import OnboardingGate from "@/components/onboarding-gate";
import { StoreProvider } from "@/lib/store-provider";
import { PostsProvider } from "@/lib/posts-store";
import { CreatorsProvider } from "@/lib/creators-store";
import { CampanhasProvider } from "@/lib/campanhas-store";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <PostsProvider>
        <CreatorsProvider>
          <CampanhasProvider>
            <OnboardingGate>
              <div className="flex h-screen min-h-screen overflow-hidden bg-app">
                <Sidebar />
                <div className="flex min-w-0 flex-1 flex-col overflow-y-auto pt-14 lg:pt-0">{children}</div>
              </div>
            </OnboardingGate>
          </CampanhasProvider>
        </CreatorsProvider>
      </PostsProvider>
    </StoreProvider>
  );
}
