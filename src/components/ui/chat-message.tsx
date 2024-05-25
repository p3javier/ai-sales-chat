import React from "react";
//import { cn } from "@/lib/utils";
import { ChatMessageProps, EVariant } from "@/lib";
import { cn } from "@/lib/utils";

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  sender,
  timestamp,
  variant = EVariant.sent,
}) => {
  return (
    <div
      className={cn(
        "grid",
        variant === EVariant.sent ? "justify-items-end" : "justify-items-start"
      )}
    >
      <div
        className={cn(
          " p-2 rounded-md",
          variant === EVariant.sent
            ? "bg-slate-700 text-slate-50"
            : "bg-slate-400"
        )}
      >
        {sender ?? <div className="sender">{sender}</div>}
        <div className="text-left">{message}</div>
        {timestamp ?? <div className="timestamp">{timestamp}</div>}
      </div>
    </div>
  );
};

export default ChatMessage;
