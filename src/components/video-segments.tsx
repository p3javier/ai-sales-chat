import React from "react";
import { Button } from "@/components/ui/button";
import { TimestampLink } from "@/components/ui/timestamp-link";
import { convertIntegerToTime } from "@/lib";

interface VideoSegmentsProps {
  segments: { timestamp: number; label: string }[];
}

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const VideoSegments: React.FC<VideoSegmentsProps> = ({ segments }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOnTimestamp = () => {
    setOpen(false);
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button size="lg" className=" text-lg">
            Ver secciones del vídeo
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Secciones del video</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <ul>
              {segments.map(({ timestamp, label }) => (
                <li
                  key={label}
                  className="flex flex-row items-center"
                  onClick={handleClickOnTimestamp}
                >
                  <div>{convertIntegerToTime(timestamp)}</div>
                  <TimestampLink
                    timestamp={label}
                    timeStampInSeconds={timestamp}
                  />
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default VideoSegments;
