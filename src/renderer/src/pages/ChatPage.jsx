import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import MessageArea from '../components/layout/MessageArea';

function ChatPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MessageArea />
    </div>
  );
}

export default ChatPage;
