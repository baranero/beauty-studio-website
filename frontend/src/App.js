import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import ServicesPage from "./pages/SerivicesPage";
import Reviews from "./pages/Reviews";
import HandsPage from "./pages/HandsPage";
import EyesPage from "./pages/EyesPage";
import FacePage from "./pages/FacePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "uslugi", element: <ServicesPage /> },
      { path: "uslugi/pielegnacja-dloni", element: <HandsPage/> },
      { path: "uslugi/pielegnacja-oczu", element: <EyesPage/> },
      { path: "uslugi/pielegnacja-twarzy", element: <FacePage/> },
      { path: "opinie", element: <Reviews /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
