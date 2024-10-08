import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { IpProvider } from "./components/IpContext/index.jsx";

createRoot(document.getElementById("root")).render(
  <IpProvider>
    <App />
  </IpProvider>
);
