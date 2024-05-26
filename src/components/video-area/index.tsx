import React from "react";
import { cn } from "@/lib";

interface VideoAreaProps {
  videoUrl: string;
  className?: string;
}

export const VideoArea: React.FC<VideoAreaProps> = ({
  videoUrl,
  className,
}) => {
  return (
    <div className={cn(className, "flex flex-col h-full")}>
      <video id="video" className="rounded-md w-full" src={videoUrl} controls>
        <track kind="captions" srcLang="en" label="English" />
      </video>
    </div>
  );
};
