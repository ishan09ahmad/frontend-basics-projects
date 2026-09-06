import { RouterProvider } from "react-router";
import router from "./layouts/AppRoutes";

export default function App() {
  return <RouterProvider router={router} />;
}
