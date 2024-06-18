import ChatApp from "./ChatApp.tsx";
import Intro from "./Intro.tsx";
import { useJourneyStateStore } from "@/lib";

function App() {
  const { introCompleted } = useJourneyStateStore(
    (state) => state.journeyState
  );
  return <>{introCompleted ? <ChatApp /> : <Intro />}</>;
}

export default App;
