import { createBrowserRouter } from "react-router-dom";
import App from "../src/App";
import { CatDetail } from "../src/components/CatDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    index: true,
    errorElement: <div>Error</div>,
  },
  {
    path: "cats/:id",
    element: <CatDetail />,
  },
]);
