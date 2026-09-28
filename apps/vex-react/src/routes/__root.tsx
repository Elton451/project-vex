import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import WallEditor from "@/features/Wall/WallEditor";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <WallEditor />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
