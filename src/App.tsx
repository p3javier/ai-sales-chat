import "./App.css";
import { ModeToggle } from "@/components/mode-toggle";
import ChatArea from "@/components/chat-area";
import ChatInput from "./components/chat-input";

function App() {
  return (
    <div className="flex flex-col h-full gap-1">
      <div className="grid justify-items-end">
        <ModeToggle />
      </div>
      <ChatArea className="grow" />
      <ChatInput />
    </div>
  );
}

export default App;
