import { EVariant } from "@/lib/constants";

type ButtonProps = {
  label: string;
  videoTime: number;
};
export interface ChatMessageProps {
  message?: JSX.Element; // TODO: Check this link to improve this type: https://www.typescriptlang.org/docs/handbook/2/conditional-types.html
  sender?: string;
  timestamp?: string;
  variant: EVariant;
  button?: ButtonProps;
}

export type Timestamp = number;
