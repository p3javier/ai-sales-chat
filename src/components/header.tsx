import React from "react";
import { BRAND_NAME, cn } from "@/lib";
import { TypographyH1 } from "@/components/ui/typography-h1";

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(className, "text-left")}>
      <TypographyH1>{BRAND_NAME}</TypographyH1>
    </header>
  );
};

export default Header;
