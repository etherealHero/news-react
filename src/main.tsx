import ReactDOM from "react-dom/client"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import "./app/style.css"

import {
  AboutPage,
  MainPage,
  SettingsPage,
  SupportPage,
  ErrorPage,
} from "./pages"
import { Navbar } from "./widgets"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
)
