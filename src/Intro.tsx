import { TypographyH1 } from "./components/ui/typography-h1";
import { Separator } from "@radix-ui/react-dropdown-menu";
import TravelPerkLogo from "./components/ui/travelperk-logo/travelperk-logo";
import { EmailForm } from "./components/email-form";
import { useJourneyStateStore } from "@/lib";
import CheckYourInbox from "./components/check-your-inbox";

const Intro = () => {
  const { introCompleted } = useJourneyStateStore(
    (state) => state.journeyState
  );
  return (
    <div className="w-full h-screen bg-cover bg-blue-800">
      <div className="flex flex-col items-center gap-4 translate-y-1/2 mx-2">
        <TravelPerkLogo />
        <Separator className="my-4" />
        <TypographyH1 className="text-white">
          Bienvenido a la demo de TravelPerk
        </TypographyH1>
        {introCompleted ? <CheckYourInbox /> : <EmailForm />}
      </div>
    </div>
  );
};

export default Intro;
