import React, { useEffect } from "react";
import "./PostDemoForm.css";
import { ModeToggle } from "@/components/mode-toggle";
import { TypographyH1 } from "./components/ui/typography-h1";

declare const Tally: any; // Declare Tally variable

const PostDemoForm: React.FC = () => {
  useEffect(() => {
    Tally.loadEmbeds();
  }, []);
  return (
    <div>
      <iframe
        className="px-20 w-1/2 h-screen"
        data-tally-src="https://tally.so/r/m6xKeB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        title="Cuestionario post-demo"
      ></iframe>
      <div className="grid grid-cols-2 place-items-center bg-gradient-to-r from-white to-blue-500 w-screen h-screen">
        <div></div>
        <div>
          <TypographyH1 className="text-white text-center justify-self-center">
            ¡Gracias por participar en la demo!
          </TypographyH1>
          <TypographyH1 className="text-white text-center justify-self-center">
            Estaremos pronto en contacto contigo.
          </TypographyH1>
        </div>
      </div>
    </div>
  );
};

export default PostDemoForm;
