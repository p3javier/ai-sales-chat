import React from "react";
import { ChatMessageProps, EVariant, cn } from "@/lib";
import { SpinnerLoader } from "@/components/ui/spinner-loader";

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  sender,
  timestamp,
  variant = EVariant.sent,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-3",
        variant === EVariant.sent ? "justify-items-end " : "justify-items-start"
      )}
    >
      <div
        className={cn(
          "p-2 rounded-md",
          variant === EVariant.sent
            ? "col-span-2 col-start-2 bg-slate-700 dark:bg-slate-500 text-slate-50"
            : "col-span-3 bg-slate-200 dark:bg-slate-600 dark:text-slate-300"
        )}
      >
        {sender ?? <div className="sender">{sender}</div>}
        {variant === EVariant.loading ? (
          <SpinnerLoader />
        ) : (
          <div className="text-left">{message}</div>
        )}
        {timestamp ?? <div className="timestamp">{timestamp}</div>}
      </div>
    </div>
  );
};

export default ChatMessage;
