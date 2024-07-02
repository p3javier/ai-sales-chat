import React from "react";

interface TypographyH1Props {
  children: React.ReactNode;
  className?: string;
}
export const TypographyH1: React.FC<TypographyH1Props> = ({
  children,
  className,
}) => {
  return (
    <h1
      className={`${className} scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-slate-700 dark:text-slate-200 antialiased`}
    >
      {children}
    </h1>
  );
};

export const TypographyH2: React.FC<TypographyH1Props> = ({
  children,
  className,
}) => {
  return (
    <h2
      className={`${className} text-lg font-semibold tracking-tight text-slate-700 dark:text-slate-200 antialiased`}
    >
      {children}
    </h2>
  );
};
