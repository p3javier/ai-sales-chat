import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useJourneyStateStore } from "@/lib";

const FinishDemoButton = () => {
  const setJourneyState = useJourneyStateStore(
    (state) => state.setJourneyState
  );
  const onFinishDemoClick = () => {
    setJourneyState({ demoCompleted: true });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Finalizar Demo</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            ¿Está seguro de que quieres finalizar ya?
          </AlertDialogTitle>
          <AlertDialogDescription>
            A continuación se le llevará a un cuestionario post-demo y ya no
            podrá regresar a está página.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>No, continuar en la demo</AlertDialogCancel>
          <AlertDialogAction onClick={onFinishDemoClick}>
            Sí, finalizar demo
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default FinishDemoButton;
