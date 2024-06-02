import { io } from "socket.io-client";

const socketOptions = (token: string) => ({
  withCredentials: true,
  transports: ["websocket"], // use WebSocket first, fallback to polling if necessary
  auth: {
    token: token,
  },
});

export const configurableSocket = (token: string, serverUrl?: string) =>
  io(serverUrl ?? import.meta.env.VITE_BACKEND_URL, socketOptions(token));
