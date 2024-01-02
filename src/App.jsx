import "./App.css";
import "./assets/animation.css";
import "./assets/responsive.css";

// react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // v6...

// pages
import Home from "./pages/Home";
import Furnitures from "./pages/Furnitures";
import FurnitureDetail from "./pages/Furnitures/FurnitureDetail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ErrorPage from "./pages/ErrorPage";
import DashboardWelcome from "./pages/Dashboard/DashboardWelcome";
import DashboardSettings from "./pages/Dashboard/DashboardSettings";
import DashboardClients from "./pages/Dashboard/DashboardClients";
import DashboardAdd from "./pages/Dashboard/DashboardAdd";
import DashboardBasket from "./pages/Dashboard/DashboardBasket";

// layouts
import RootLayout from "./layouts/RootLayout";
import ProductLayout from "./layouts/ProductLayout";
import DashboarLayout from "./layouts/DashboarLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/products",
          element: <ProductLayout />,
          children: [
            {
              index: true,
              element: <Furnitures />,
            },
            {
              path: ":id",
              element: <FurnitureDetail />,
            },
          ],
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/dashboard",
          element: <DashboarLayout />,
          children: [
            {
              index: true,
              element: <DashboardWelcome />,
            },
            {
              path: "clients",
              element: <DashboardClients />,
            },
            {
              path: "settings",
              element: <DashboardSettings />,
            },
            {
              path: "add",
              element: <DashboardAdd />,
            },
            {
              path: "basket",
              element: <DashboardBasket />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
