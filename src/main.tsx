import React from "react";
import ReactDOM from "react-dom/client";

import App from "@src/App";
import router from "@src/pages/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);
