import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { TimestampLink } from "@/components/ui/timestamp-link";

interface VideoSegmentsProps {
  segments: { timestamp: number; label: string }[];
}
const VideoSegments: React.FC<VideoSegmentsProps> = ({ segments }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="lg" className=" text-lg">
          Ver secciones del vídeo
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-120">
        <div className="grid gap-4">
          <div>
            <ul>
              {segments.map(({ timestamp, label }) => (
                <li key={label} className="my-4">
                  <TimestampLink
                    timestamp={label}
                    timeStampInSeconds={timestamp}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default VideoSegments;
