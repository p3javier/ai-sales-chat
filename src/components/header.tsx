import React from "react";
import { BRAND_NAME, cn } from "@/lib";
import { TypographyH1 } from "@/components/ui/typography-h1";
import FinishDemoButton from "./finish-demo-button";
interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(className, "text-left")}>
      <TypographyH1>{BRAND_NAME}</TypographyH1>
      <FinishDemoButton />
    </header>
  );
};

export default Header;
