import { TypographyH1 } from "./components/ui/typography-h1";
import { Separator } from "@radix-ui/react-dropdown-menu";
import TravelPerkLogo from "./components/ui/travelperk-logo/travelperk-logo";
import { Button } from "@/components/ui/button";
import { useJourneyStateStore } from "./lib";

const Intro = () => {
  const setJourneyState = useJourneyStateStore(
    (state) => state.setJourneyState
  );
  const handleStartClick = () => {
    setJourneyState({ introCompleted: true });
  };
  return (
    <div className="w-full h-screen bg-cover bg-blue-800">
      <div className=" translate-y-1/2">
        <TravelPerkLogo />
        <Separator className="my-4" />
        <TypographyH1 className="text-white">
          Bienvenido a la demo de TravelPerk
        </TypographyH1>
        <Button onClick={handleStartClick} variant="secondary" className="mt-4">
          Empezar
        </Button>
      </div>
    </div>
  );
};

export default Intro;
