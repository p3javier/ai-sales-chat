import { EVariant } from "@/lib/constants";

type ButtonProps = {
  label: string;
  videoTime: number;
};
export interface ChatMessageProps {
  message: string;
  sender?: string;
  timestamp?: string;
  variant?: EVariant;
  button?: ButtonProps;
}
