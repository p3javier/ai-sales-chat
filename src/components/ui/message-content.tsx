import { hasTimestamps, processResponseMessage } from "@/lib";
import { TimestampLink } from "@/components/ui/timestamp-link";
import React from "react";

export interface MessageContentProps {
  messageInput: string;
}

export const MessageContent: React.FC<MessageContentProps> = ({
  messageInput,
}) => {
  if (hasTimestamps(messageInput)) {
    const processedResponseArray = processResponseMessage(messageInput);
    return processedResponseArray.map((message, index) => {
      const { type, content } = message;
      const { length } = processedResponseArray;
      return (
        <div className="whitespace-pre-line" key={index}>
          {type === "string" || typeof content.timestamp === "undefined" ? (
            <>{content.message}</>
          ) : (
            <div>
              <TimestampLink
                timestamp={content.message}
                timeStampInSeconds={content.timestamp}
              />
              {length - 1 === index ? "" : " "}
            </div>
          )}
        </div>
      );
    });
  }
  return <div className="whitespace-pre-line">{messageInput}</div>;
};
