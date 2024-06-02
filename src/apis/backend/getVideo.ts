export const getVideo = async (videoSvid: string) => {
  const url = new URL(`video/${videoSvid}`, import.meta.env.VITE_BACKEND_URL);
  console.log("CALL TO BACKEND API FOR VIDEO");
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to get video");
  }
  return response.json();
};
