import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import App from "./App"
import Contact from "./Components/Contact/AllContact";
import About from "./Components/About/AllAbout";
import Quality from "./Components/Quality/AllQuality";
import Shop from "./Components/Shop/AllShop"
import Search from "./Components/Search";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "contact",
    element: <Contact />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "shop",
    element: <Shop />
  },
  {
    path: "quality",
    element: <Quality />
  },
  {
    path: "search",
    element: <Search />
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);