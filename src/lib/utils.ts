import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
