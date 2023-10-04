import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import BaseLayout from "../components/BaseLayout"
import HomeView from "../views/HomeView";
import CustomerServiceView from "../views/CustomerServiceView";
import StoreLocationView from "../views/StoreLocationView";
import ProductsView from "../views/ProductsView";
import ProductDetailsView from "../views/ProductDetailsView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "",
        element: <HomeView />,
      },
      {
        path: "customer-service",
        element: <CustomerServiceView />
      },
      {
        path: "store-location",
        element: <StoreLocationView />
      },
      {
        path: "products",
        element: <ProductsView />
      },
      {
        path: "products/:id",
        element: <ProductDetailsView />
      }
    ]
  }
]);

export default router;