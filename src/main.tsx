import React from "react";
import ReactDOM from "react-dom/client";

import App from "@src/components/app/App";
import router from "@src/components/pages/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App router={router} />
  </React.StrictMode>
);
