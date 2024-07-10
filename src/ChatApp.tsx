import { ModeToggle } from "@/components/mode-toggle";
import ChatArea from "@/components/chat-area";
import ChatInput from "./components/chat-input";
import { VideoArea } from "@/components/video-area";
import { Header } from "@/components/header";
import { useEffect, useState } from "react";
import {
  getSvidFromBrowserURL,
  EVideoError,
  useJourneyStateStore,
} from "@/lib";
import { getVideo } from "@/apis/backend";
import "./ChatApp.css";
import { FormDialog } from "@/components/form-dialog/form-dialog";
import VideoSegments from "@/components/video-segments";

const videoSegments = [
  {
    timestamp: 0,
    label: "Introducción",
  },
  {
    timestamp: 3,
    label: "Visión general de la plataforma de Travel Perk",
  },
  {
    timestamp: 14,
    label: "Información de perfil y documentación de viaje",
  },
  {
    timestamp: 71,
    label: "Agregar programas de lealtad y documentos de viaje",
  },
  {
    timestamp: 98,
    label: "Categorías y opciones de búsqueda",
  },
  {
    timestamp: 186,
    label: "Reservar un viaje",
  },
  {
    timestamp: 421,
    label: "Resumen de los vuelos seleccionados",
  },
  {
    timestamp: 423,
    label: "Agregar alojamiento en hotel",
  },
  {
    timestamp: 483,
    label: "Acceder a facturas e informes financieros",
  },
  {
    timestamp: 705,
    label: "Proceso de aprobación para reservas",
  },
  {
    timestamp: 773,
    label: "Seguimiento de viajes y próximos viajes",
  },
  {
    timestamp: 825,
    label: "Planificación de eventos para viajes en grupo",
  },
  {
    timestamp: 920,
    label: "Gestión de perfiles y roles de empleados",
  },
  {
    timestamp: 1073,
    label: "Facturación y opciones de pago",
  },
  {
    timestamp: 1420,
    label: "Configuración de flujos de aprobación",
  },
  {
    timestamp: 1580,
    label: "Personalización de preferencias y políticas",
  },
  {
    timestamp: 1655,
    label: "Soporte 24/7 y conclusión",
  },
];

const ChatApp = () => {
  const { initialFormCompleted } = useJourneyStateStore(
    (state) => state.journeyState
  );
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [videoError, setVideoError] = useState<EVideoError>(
    EVideoError.noError
  );

  useEffect(() => {
    const setVideo = async () => {
      const svid = getSvidFromBrowserURL();
      if (!svid) {
        setVideoError(EVideoError.svidNotFound);
        return;
      }
      try {
        const videoUrl = await getVideo(svid);
        console.log(videoUrl);
        setVideoUrl(videoUrl.url);
      } catch (error) {
        setVideoError(EVideoError.notFound);
      }
    };
    setVideo();
  }, []);
  return (
    <div className="flex flex-col md:flex-row md:px-2 h-full p-4 mx-4">
      <FormDialog />
      <div className="grid grid-flow-col grid-rows-8 basis-1/3 md:basis-2/3 bg-slate-200 dark:bg-slate-700 p-2 rounded-md">
        <Header className="row-span-1" />
        <VideoArea
          className="row-span-6"
          videoUrl={videoUrl}
          error={videoError}
        />
        <div className="row-span-1 overflow-scroll">
          <VideoSegments segments={videoSegments} />
        </div>
      </div>
      <div className="basis-2/3 md:basis-1/3">
        <div className="flex flex-col h-full gap-1">
          <div className="md:grid justify-items-end hidden">
            <ModeToggle />
          </div>
          <ChatArea className="grow" />
          <ChatInput disabled={!!videoError || !initialFormCompleted} />
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
