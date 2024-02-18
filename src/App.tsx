import Homepage from "./components/Homepage";
import RouteError from "./components/Pages/RouteError";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../public/background.png";
import Button from "./components/NavBar/Button";
import Root from "./components/Pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouteError />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "test", element: <Button>XD</Button> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
