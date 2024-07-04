import { useEffect } from "react";
import { useJourneyStateStore } from "@/lib";
import "./form-dialog.css";

declare const Tally: any; // Declare Tally variable

const formId = "nrKqZ5";

export const FormDialog = () => {
  const setJourneyState = useJourneyStateStore(
    (state) => state.setJourneyState
  );
  useEffect(() => {
    Tally?.openPopup(formId, {
      layout: "modal",
      width: 420,
      autoClose: 1000,
      doNotShowAfterSubmit: false,
      overlay: true,
      onSubmit: () => setJourneyState({ initialFormCompleted: true }),
    });
  }, []);
  return <></>;
};
