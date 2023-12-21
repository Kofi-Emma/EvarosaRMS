import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import { useAlertContext } from "../context/Alert/AlertContext";

const AlertBox = () => {
  const { alert } = useAlertContext();

  return (
    alert !== null && (
      <div>
        {alert.type === "error" ? (
          <Alert variant='filled' severity='error'>
            <AlertTitle>{alert.type}</AlertTitle>{" "}
            {alert.message}
          </Alert>
        ) : (
          <Alert variant='filled' severity='success'>
            <AlertTitle>{alert.type}</AlertTitle>{" "}
            {alert.message}
          </Alert>
        )}
      </div>
    )
  );
};

export default AlertBox;
