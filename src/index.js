import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/components/Dashboard/theme";
import { ContextProvider } from "./context/StateContext";
import { MenuContextProvider } from "./context/MenuContext";
import { InventoryContextProvider } from "./context/InventoryContext";
import { ExpensesContextProvider } from "./context/ExpensesContext";
import { FeedbackProvider } from "./context/FeedbackContext";
import { ReceiptContextProvider } from "./context/ReceiptContext";
import { InvoiceProvider } from "./context/InvoiceContext";
import { AuthProvider } from "./context/Authentication/AuthContext";
import { AlertProvider } from "./context/Alert/AlertContext";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <ThemeProvider theme={theme}>
    <FeedbackProvider>
      <ContextProvider>
        <ExpensesContextProvider>
          <MenuContextProvider>
            <ReceiptContextProvider>
              <InventoryContextProvider>
                <InvoiceProvider>
                  <AuthProvider>
                    <AlertProvider>
                      <App />
                    </AlertProvider>
                  </AuthProvider>
                </InvoiceProvider>
              </InventoryContextProvider>
            </ReceiptContextProvider>
          </MenuContextProvider>
        </ExpensesContextProvider>
      </ContextProvider>
    </FeedbackProvider>
  </ThemeProvider>
);
