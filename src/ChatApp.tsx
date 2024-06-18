import { ModeToggle } from "@/components/mode-toggle";
import ChatArea from "@/components/chat-area";
import ChatInput from "./components/chat-input";
import { VideoArea } from "@/components/video-area";
import { Header } from "@/components/header";
import { useEffect, useState } from "react";
import { getSvidFromBrowserURL, EVideoError } from "@/lib";
import { getVideo } from "@/apis/backend";
import "./ChatApp.css";
import { FormDialog } from "./components/form-dialog/form-dialog";
import { useJourneyStateStore } from "@/lib";

const ChatApp = () => {
  const { initialFormCompleted } = useJourneyStateStore(
    (state) => state.journeyState
  );
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [videoError, setVideoError] = useState<EVideoError>(
    EVideoError.noError
  );

  useEffect(() => {
    const setVideo = async () => {
      const svid = getSvidFromBrowserURL();
      if (!svid) {
        setVideoError(EVideoError.svidNotFound);
        return;
      }
      try {
        const videoUrl = await getVideo(svid);
        console.log(videoUrl);
        setVideoUrl(videoUrl.url);
      } catch (error) {
        setVideoError(EVideoError.notFound);
      }
    };
    setVideo();
  }, []);
  return (
    <div className="flex flex-col md:flex-row md:px-2 h-full p-4 mx-4">
      <FormDialog />
      <div className="grid grid-flow-col grid-rows-8 basis-1/3 md:basis-2/3 bg-slate-200 dark:bg-slate-700 p-2 rounded-md">
        <Header className="row-span-1" />
        <VideoArea
          className="row-span-7"
          videoUrl={videoUrl}
          error={videoError}
        />
      </div>
      <div className="basis-2/3 md:basis-1/3">
        <div className="flex flex-col h-full gap-1">
          <div className="md:grid justify-items-end hidden">
            <ModeToggle />
          </div>
          <ChatArea className="grow" />
          <ChatInput disabled={!!videoError || !initialFormCompleted} />
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
