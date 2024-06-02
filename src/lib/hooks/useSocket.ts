import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { configurableSocket } from "@/apis/ws";
import { getToken } from "@/lib";

export const useSocket = (serverUrl?: string): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const authToken = getToken();
  if (!authToken) return null;

  useEffect(() => {
    const socketIo = configurableSocket(authToken, serverUrl);
    setSocket(socketIo);

    function cleanup() {
      socketIo.disconnect();
    }

    return cleanup;
  }, [serverUrl]);

  return socket;
};
