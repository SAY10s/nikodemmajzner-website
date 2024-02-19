import Homepage from "./components/Pages/Homepage";
import RouteError from "./components/Pages/RouteError";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouteError />,
    children: [{ path: "/", element: <Homepage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
