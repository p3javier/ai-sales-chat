import ChatApp from "./ChatApp.tsx";
import Intro from "./Intro.tsx";
import { hasSvidAndTokenParams } from "@/lib";

function App() {
  return <>{hasSvidAndTokenParams() ? <ChatApp /> : <Intro />}</>;
}

export default App;
