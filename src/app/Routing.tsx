import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Layout from "./Layout"
import {
  AboutPage,
  MainPage,
  SettingsPage,
  SupportPage,
  ErrorPage,
  DetailsPage,
} from "../pages"
import { newsLoader } from "../pages/Main"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: newsLoader,
        element: <MainPage />,
      },
      {
        path: "/news/:id",
        element: <DetailsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/settings",
        element: <SettingsPage />,
      },
      {
        path: "/support",
        element: <SupportPage />,
      },
    ],
  },
])

export default () => <RouterProvider router={router} />
