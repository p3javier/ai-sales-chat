import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Timestamp } from "@/lib";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setTime(seconds: number) {
  let video: HTMLVideoElement | null = document.getElementById(
    "video"
  ) as HTMLVideoElement;
  // Check if the desired time is within the video duration

  if (video && seconds < video?.duration) {
    video.currentTime = seconds; // Jump to the specified time
  } else {
    console.log(
      "The video is not defined or not long enough to jump to that time."
    );
  }
}

function parseDuration(durationString: string) {
  const timeParts = durationString.split(":").slice(0, 3);
  let seconds = Number.parseFloat(timeParts[timeParts.length - 1]) || 0,
    minutes = Number.parseFloat(timeParts[timeParts.length - 2]) || 0;
  let hours = Number.parseFloat(timeParts[timeParts.length - 3]) || 0;
  return 3600 * hours + 60 * minutes + seconds;
}

type ResponseProcessed = {
  type: "string" | "timestamp";
  content: {
    message: string;
    timestamp?: Timestamp;
  };
};

export const hasTimestamps = (message: string): boolean => {
  const regex = /\[\d{1,2}:\d{2}\]/g;
  return regex.test(message);
};

export const processResponseMessage = (
  message: string
): ResponseProcessed[] => {
  const regex = /\[\d{1,2}:\d{2}\]/g; // TODO: Add support for hours
  const stringsArr = message.split(regex);
  const timestamps = message.match(regex);
  console.log("timestamps", timestamps);
  console.log("stringsArr", stringsArr);
  if (timestamps) {
    const timestampsPairs: Array<[Timestamp, string]> = timestamps.map(
      (timestamp) => {
        const timestampSliced = timestamp.slice(1, -1);
        return [parseDuration(timestampSliced), timestampSliced];
      }
    );
    let responseArray: ResponseProcessed[] = [];
    stringsArr.forEach((string, index) => {
      responseArray.push({ type: "string", content: { message: string } });
      if (timestampsPairs[index]) {
        responseArray.push({
          type: "timestamp",
          content: {
            message: timestampsPairs[index][1],
            timestamp: timestampsPairs[index][0],
          },
        });
      }
    });
    console.log("responseArray", responseArray);
    return responseArray;
  }

  return [{ type: "string", content: { message: stringsArr[0] } }];
};

export const getToken = () => {
  const query = new URLSearchParams(window.location.search);
  const token = query.get("authToken");
  if (token) {
    localStorage.setItem("authToken", token);
    return token;
  }
  if (localStorage.getItem("authToken")) {
    return localStorage.getItem("authToken");
  }
  return localStorage.getItem("authToken");
};

export const getSvidFromBrowserURL = () => {
  const url = new URL(window.location.href);
  return url.searchParams.get("svid");
};
