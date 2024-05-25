import { EVariant } from "@/lib/constants";

export interface ChatMessageProps {
  message: string;
  sender?: string;
  timestamp?: string;
  variant?: EVariant;
}
