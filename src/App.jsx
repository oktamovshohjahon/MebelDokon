import "./App.css";
import "./assets/animation.css";
import "./assets/responsive.css";

// react-router-dom
import { RouterProvider, createBrowserRouter } from "react-router-dom"; // v6...

// pages
import Home from "./pages/Home";
import Furnitures from "./pages/Furnitures";

// layouts
import RootLayout from "./layouts/RootLayout";
import ProductLayout from "./layouts/ProductLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      // errorElement: <ErrorPage />,
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
