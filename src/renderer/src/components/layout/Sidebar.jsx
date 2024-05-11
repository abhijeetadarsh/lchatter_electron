import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faGear, faPhone, faCameraRetro } from "@fortawesome/free-solid-svg-icons";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

import ThemeToggle from "../theme/ThemeToggle";

function Sidebar() {
  return (
    <TooltipProvider>
      <div className="flex flex-col justify-between z-40 h-full w-12 bg-background">
        {/* icons on top */}
        <div className="grid w-12 mt-2 mb-2 justify-items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink to="/">
                <Button variant="ghost" className="h-8 w-8 rounded-md mt-2 mb-2">
                  <FontAwesomeIcon icon={faMessage} />
                </Button>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent>All Chats</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink to="/calls">
                <Button variant="ghost" className="h-8 w-8 rounded-md mt-2 mb-2">
                  <FontAwesomeIcon icon={faPhone} />
                </Button>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent>Calls</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink to="/camera">
                <Button variant="ghost" className="h-8 w-8 rounded-md mt-2 mb-2">
                  <FontAwesomeIcon icon={faCameraRetro} />
                </Button>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent>Camera</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <ThemeToggle />
            </TooltipTrigger>
            <TooltipContent>Toggle Theme</TooltipContent>
          </Tooltip>
        </div>
        {/* icons on bottom */}
        <div className="grid w-12 mt-2 mb-2 justify-items-center">
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink to="/settings">
                <Button variant="ghost" className="h-8 w-8 rounded-md mt-2 mb-2">
                  <FontAwesomeIcon icon={faGear} />
                </Button>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent>Settings</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLink to="/profile">
                <Button variant="ghost" className="h-8 w-8 rounded-md mt-2 mb-2">
                  <Avatar>
                    <AvatarImage
                      src="\src\renderer\src\assets\profile_pic.jpg"
                      alt="@profile_pic"
                    />
                    <AvatarFallback>AY</AvatarFallback>
                  </Avatar>
                </Button>
              </NavLink>
            </TooltipTrigger>
            <TooltipContent>Profile</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}

export default Sidebar;
