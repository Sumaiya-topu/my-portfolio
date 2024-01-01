import { createBrowserRouter } from "react-router-dom";
import TabSection from "./Components/TabSection/TabSection";
import Home from "./assets/Pages/Home";

const routes = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  { path: "/acievement", element: <TabSection></TabSection> },
]);
export default routes;
