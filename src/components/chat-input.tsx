import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChatStore } from "@/lib";

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState("");
  const addMessage = useChatStore((state) => state.addMessage);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addMessage({ message });
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
