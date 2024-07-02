import { TypographyH1, TypographyH2 } from "@/components/ui/typography-h1";

const CheckYourInbox = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <TypographyH1 className="text-white">
        ¡Revisa tu bandeja de entrada!
      </TypographyH1>
      <TypographyH2 className="text-white">
        Te hemos enviado un email con un enlace para continuar.
      </TypographyH2>
    </div>
  );
};

export default CheckYourInbox;
