import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
