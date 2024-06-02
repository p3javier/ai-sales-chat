import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageContent } from "./ui/message-content";
import { EVariant, useChatStore, getSvidFromBrowserURL } from "@/lib";
import { useSocket } from "@/lib/hooks";
import { useToast } from "@/components/ui/use-toast";

const ChatInput: React.FC = () => {
  const socket = useSocket();
  const [message, setMessage] = useState("");
  const addMessage = useChatStore((state) => state.addMessage);
  const removeLastMessage = useChatStore((state) => state.removeLastMessage);
  const { toast } = useToast();

  useEffect(() => {
    if (socket) {
      socket.on("message", (message) => {
        console.log("Received message from server: ", message);
        const messageElement = <MessageContent messageInput={message} />;
        removeLastMessage();
        addMessage({ message: messageElement, variant: EVariant.received });
      });

      return () => {
        socket.off("message");
      };
    }
  }, [socket]);

  type SendMessageResponse = {
    status: "success" | "error";
  };
  const sendMessage = (message: string): SendMessageResponse => {
    if (!socket) {
      console.error("Socket.io is not connected");
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Socket.io is not connected",
      });
      return { status: "error" };
    }
    const svid = getSvidFromBrowserURL();
    const messageObject = {
      svid,
      message,
    };

    socket.emit("message", JSON.stringify(messageObject));
    return { status: "success" };
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { status } = sendMessage(message);
    if (status === "error") {
      return;
    }
    addMessage({ message: <>{message}</>, variant: EVariant.sent });
    addMessage({ variant: EVariant.loading });
    setMessage("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex grid-cols-4 grid-rows-1 gap-2 mx-4"
    >
      <Input
        className="grid col-span-3"
        type="text"
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button className="grid" type="submit">
        Send
      </Button>
    </form>
  );
};

export default ChatInput;
