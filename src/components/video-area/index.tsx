import React from "react";
import { EVideoError, cn } from "@/lib";
import { Skeleton } from "@/components/ui/skeleton";

interface VideoAreaProps {
  videoUrl: string;
  className?: string;
  error: EVideoError;
}

export const VideoArea: React.FC<VideoAreaProps> = ({
  videoUrl,
  className,
  error,
}) => {
  const style = cn(className, "flex flex-col h-full");
  if (videoUrl && !error) {
    return (
      <div className={style}>
        <video id="video" className="rounded-md w-full" controls>
          <source src={videoUrl} type="video/mp4" />
          <track kind="captions" srcLang="en" label="English" />
        </video>
      </div>
    );
  }

  if (!videoUrl && !error) {
    return <Skeleton className={style} />;
  }

  switch (error) {
    case EVideoError.svidNotFound:
      return (
        <div className={style}>
          <div className="text-center text-lg">{EVideoError.svidNotFound}</div>
        </div>
      );
    case EVideoError.notFound:
      return (
        <div className={style}>
          <div className="text-center text-lg">{EVideoError.notFound}</div>
        </div>
      );
    default:
      return null;
  }
};
