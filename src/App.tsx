import ChatApp from "./ChatApp.tsx";
import Intro from "./Intro.tsx";
import { hasSvidAndTokenParams } from "@/lib";
import PostDemoForm from "./PostDemoForm.tsx";
import { useJourneyStateStore } from "@/lib";

function App() {
  const { demoCompleted } = useJourneyStateStore((state) => state.journeyState);
  return (
    <>
      {!hasSvidAndTokenParams() ? (
        <Intro />
      ) : !demoCompleted ? (
        <ChatApp />
      ) : (
        <PostDemoForm />
      )}
    </>
  );
}

export default App;
