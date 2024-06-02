import React from "react";
import { Timestamp, setTime } from "@/lib";

interface TimestampLinkProps {
  timeStampInSeconds: Timestamp;
  timestamp: string;
}

export const TimestampLink: React.FC<TimestampLinkProps> = ({
  timeStampInSeconds,
  timestamp,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === "Enter") {
      setTime(timeStampInSeconds);
    }
  };

  return (
    <span
      className="rounded-md p-2 mb-2 transition-all cursor-pointer font-bold duration-100 dark:hover:duration-200 underline hover:bg-slate-50 dark:hover:bg-slate-400 dark:hover:text-slate-50"
      role="button"
      tabIndex={0}
      onClick={() => setTime(timeStampInSeconds)}
      onKeyDown={handleKeyDown}
    >
      {timestamp}
    </span>
  );
};
