import "./App.css";
import { ModeToggle } from "@/components/mode-toggle";
import ChatArea from "@/components/chat-area";
import ChatInput from "./components/chat-input";
import { VideoArea } from "@/components/video-area";
import { Header } from "@/components/header";

function App() {
  return (
    <div className="flex flex-col md:flex-row md:px-2 h-full">
      <div className="grid grid-flow-col grid-rows-8 basis-1/3 md:basis-2/3">
        <Header className="row-span-1" />
        <VideoArea
          className="row-span-7"
          videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
        />
      </div>
      <div className="basis-2/3 md:basis-1/3">
        <div className="flex flex-col h-full gap-1">
          <div className="md:grid justify-items-end hidden">
            <ModeToggle />
          </div>
          <ChatArea className="grow" />
          <ChatInput />
        </div>
      </div>
    </div>
  );
}

export default App;
