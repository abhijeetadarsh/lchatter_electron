import React from "react";
import MessageArea from "../components/layout/MessageArea";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import ConnectionList from "@/components/layout/ConnectionList";

function ChatPage() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={25}>
        <ConnectionList />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <MessageArea />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default ChatPage;
