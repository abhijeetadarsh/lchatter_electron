import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "../ui/scroll-area";

// Dummy user data
const users = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/avatars/06.png"
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    avatar: "/avatars/07.png"
  },
  {
    name: "Michael Smith",
    email: "michael.smith@example.com",
    avatar: "/avatars/08.png"
  },
  {
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    avatar: "/avatars/09.png"
  },
  {
    name: "Ethan Brown",
    email: "ethan.brown@example.com",
    avatar: "/avatars/10.png"
  },
  {
    name: "Sophia Miller",
    email: "sophia.miller@example.com",
    avatar: "/avatars/11.png"
  },
  {
    name: "Liam Davis",
    email: "liam.davis@example.com",
    avatar: "/avatars/12.png"
  },
  {
    name: "Emma Martinez",
    email: "emma.martinez@example.com",
    avatar: "/avatars/13.png"
  },
  {
    name: "James Thompson",
    email: "james.thompson@example.com",
    avatar: "/avatars/14.png"
  },
  {
    name: "Olivia Anderson",
    email: "olivia.anderson@example.com",
    avatar: "/avatars/15.png"
  },
  {
    name: "William Garcia",
    email: "william.garcia@example.com",
    avatar: "/avatars/16.png"
  },
  {
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    avatar: "/avatars/17.png"
  },
  {
    name: "Alexander Hernandez",
    email: "alexander.hernandez@example.com",
    avatar: "/avatars/18.png"
  },
  {
    name: "Mia Lopez",
    email: "mia.lopez@example.com",
    avatar: "/avatars/19.png"
  },
  {
    name: "Benjamin Martinez",
    email: "benjamin.martinez@example.com",
    avatar: "/avatars/20.png"
  }
];

function ConnectionList() {
  const [filter, setFilter] = useState("");

  const filteredUsers = users.filter((user) =>
    user.email.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <Input
        placeholder="Filter connections..."
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        className="max-w-sm"
      />
      <ScrollArea>
        <div className="connection-list">
          {users.map((user, index) => (
            <div key={index} className="connection-item flex items-center space-x-4 p-2">
              <Avatar>
                <AvatarImage src={user.avatar} alt="Image" />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </>
  );
}

export default ConnectionList;
