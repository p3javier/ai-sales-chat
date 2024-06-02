import React from "react";

interface TypographyH1Props {
  children: React.ReactNode;
}
export const TypographyH1: React.FC<TypographyH1Props> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-slate-700 dark:text-slate-200">
      {children}
    </h1>
  );
};
