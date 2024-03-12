import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./globalStyle";
import NavigateRoutes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavigateRoutes /> <GlobalStyle />
  </React.StrictMode>
);
