import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faGear, faPhone, faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
//----------------------------------------------------------------------------------------

import { Home, LineChart, Package, Package2, Settings, ShoppingCart, Users2 } from "lucide-react";

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

function Sidebar() {
  return (
    <div className="flex flex-col justify-between z-40 h-[calc(100vh_-_3rem)] w-12 bg-[color:hsl(var(--secondary))]">
      {/* icons on top */}
      <div className="flex flex-col w-12">
        <ul className="mt-2 mb-2">
          <li className="flex justify-center">
            <Button variant="ghost" className="h-8 w-8 rounded-md">
              <FontAwesomeIcon icon={faMessage} />
            </Button>
          </li>
        </ul>
        <ul className="mt-2 mb-2">
          <li className="flex justify-center">
            <Button variant="ghost" className="h-8 w-8 rounded-md">
              <FontAwesomeIcon icon={faPhone} />
            </Button>
          </li>
        </ul>
        <ul className="mt-2 mb-2">
          <li className="flex justify-center">
            <Button variant="ghost" className="h-8 w-8 rounded-md">
              <FontAwesomeIcon icon={faCameraRetro} />
            </Button>
          </li>
        </ul>
      </div>
      {/* icons on bottom */}
      <div className="flex flex-col w-12">
        <ul className="mt-2 mb-2">
          <li className="flex justify-center">
            <Button variant="ghost" className="h-8 w-8 rounded-md">
              <FontAwesomeIcon icon={faGear} />
            </Button>
          </li>
        </ul>
        <ul className="mt-2 mb-2">
          <li className="flex justify-center">
            <Button variant="ghost" className="h-8 w-8 rounded-md">
              <Avatar>
                <AvatarImage src="\src\renderer\src\assets\profile_pic.jpg" alt="@profile_pic" />
                <AvatarFallback>AY</AvatarFallback>
              </Avatar>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </TooltipProvider>
  );
}

export default Sidebar;
