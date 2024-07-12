import React from "react";
import ChatMessage from "./ui/chat-message";
import { EVariant, useChatStore, useJourneyStateStore } from "@/lib";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChatAreaProps {
  className?: string;
}

const ChatArea: React.FC<ChatAreaProps> = (props) => {
  const { className } = props;
  const messages = useChatStore((state) => state.messages);
  const { initialFormCompleted } = useJourneyStateStore(
    (state) => state.journeyState
  );

  return (
    <ScrollArea className={className}>
      <div className="flex flex-col gap-4 my-1 mx-4">
        {initialFormCompleted && (
          <ChatMessage
            message={
              <>
                Puedes usar este chat para preguntar cualquier duda que tengas
                sobre el producto.
              </>
            }
            variant={EVariant.received}
          />
        )}
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
    </ScrollArea>
  );
};

export default ChatArea;
