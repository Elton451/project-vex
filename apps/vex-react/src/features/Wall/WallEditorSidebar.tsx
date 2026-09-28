import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
} from "@/shared/components/ui/sidebar";
import { Button } from "@/shared/components/ui/button";
import { MdLinearScale } from "react-icons/md";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/shared/components/ui/tooltip";

const WallEditorSidebar = () => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "80px",
          "--sidebar-width-mobile": "80px",
        } as React.CSSProperties
      }
      defaultOpen={true}
      open={true}
    >
      <Sidebar>
        <SidebarContent>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button className="rounded">
                  <MdLinearScale />
                </Button>
              }
            />
            <TooltipContent>Add a wall</TooltipContent>
          </Tooltip>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
};

export default WallEditorSidebar;
