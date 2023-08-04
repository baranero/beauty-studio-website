import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import ServicesPage from "./pages/SerivicesPage";
import Reviews from "./pages/Reviews";

const router = createBrowserRouter([
  {path: '/', element: <Layout/>,
  errorElement: <NotFound/>,
  children: [
    {index: true, element: <Home/>}, 
    {path: 'uslugi', element: <ServicesPage/>},
    {path:'opinie', element: <Reviews/>}
  ]},
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
