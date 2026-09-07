"use client";

import { createContext, useContext, useState } from "react";

const ChatContext = createContext(null);

export function ChatProvider({ children }) {
  const [statusChat, setStatus] = useState("loading");

  const openChat = () => {
    setStatus("open");
  };

  const closeChat = () => {
    setStatus("closed");
  };

  const setLoading = () => {
    setStatus("loading");
  };

  return (
    <ChatContext.Provider
      value={{
        statusChat,
        openChat,
        closeChat,
        setLoading,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  return useContext(ChatContext);
}