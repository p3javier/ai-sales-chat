import React from "react";
import { ChatMessageProps, EVariant, cn, setTime } from "@/lib";
import { Button } from "@/components/ui/button";

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  sender,
  timestamp,
  variant = EVariant.sent,
}) => {
  const button = {
    label: "Jump to video",
    videoTime: 4,
  };
  return (
    <div
      className={cn(
        "grid grid-cols-3",
        variant === EVariant.sent ? "justify-items-end " : "justify-items-start"
      )}
    >
      <div
        className={cn(
          "col-span-2 p-2 rounded-md",
          variant === EVariant.sent
            ? "col-start-2 bg-slate-700 dark:bg-slate-500 text-slate-50"
            : "bg-slate-200 dark:bg-slate-600 dark:text-slate-300"
        )}
      >
        {sender ?? <div className="sender">{sender}</div>}
        <div className="text-left">{message}</div>
        {timestamp ?? <div className="timestamp">{timestamp}</div>}
        {button && (
          <Button onClick={() => setTime(button.videoTime)} role="link">
            {button.label}
          </Button>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
