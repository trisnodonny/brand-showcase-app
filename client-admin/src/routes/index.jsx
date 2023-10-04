import { createBrowserRouter, redirect } from "react-router-dom"
import Login from "../views/Login"
import Register from "../views/Register"
import TableProduct from "../components/TableProduct"
import TableCategory from "../components/TableCategory"
import BaseLayout from "../components/BaseLayout"
import ProductAdd from "../views/ProductAdd"
import ProductEdit from "../views/ProductEdit"
import FormCategory from "../components/FormCategory"
import CategoryEdit from "../views/CategoryEdit"

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) throw redirect("/login")
      return null
    },
    children: [
      {
        path: "",
        element: <TableProduct/>,
      },
      {
        path: "add-product",
        element: <ProductAdd/>,
      },
      {
        path: "edit-product/:id",
        element: <ProductEdit/>,
      },
      {
        path: "category",
        element: <TableCategory/>
      },
      {
        path: "add-category",
        element: <FormCategory/>,
      },
      {
        path: "edit-category/:id",
        element: <CategoryEdit/>,
      },
      {
        path: "register",
        element: <Register />
      },
    ]
  },
  {
    path: "/login",
    loader: () => {
      if (localStorage.getItem("access_token")) throw redirect("/")
      return null
    },
    element: <Login />
  },
])

export default router