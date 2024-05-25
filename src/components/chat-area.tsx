import React from "react";
import ChatMessage from "./ui/chat-message";
import { cn } from "@/lib/utils";
import { useChatStore } from "@/lib";

interface ChatAreaProps {
  className?: string;
}

const ChatArea: React.FC<ChatAreaProps> = (props) => {
  const { className } = props;
  const messages = useChatStore((state) => state.messages);
  return (
    <div className={cn(className, "flex flex-col gap-1 my-1")}>
      {messages.map((messageProps, index) => {
        const { message, sender, timestamp, variant } = messageProps;
        return (
          <ChatMessage
            key={index}
            message={message}
            sender={sender}
            timestamp={timestamp}
            variant={variant}
          />
        );
      })}
    </div>
  );
};

export default ChatArea;
