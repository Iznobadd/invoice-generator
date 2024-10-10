import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Devis from "./pages/Devis";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "devis",
    element: <Devis />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
