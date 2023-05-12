import ReactDOM from "react-dom/client"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import "./app/style.css"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import {
  AboutPage,
  MainPage,
  SettingsPage,
  SupportPage,
  ErrorPage,
  NewsPage,
} from "./pages"
import { Navbar } from "./widgets"
import { Provider } from "react-redux"
import { store } from "./app/store"

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
        path: "/news/:newsId",
        element: <NewsPage />,
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
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
