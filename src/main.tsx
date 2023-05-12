import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
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
  DetailsPage,
} from "./pages"
import { Provider } from "react-redux"
import { store } from "./app/store"
import { Layout } from "./app"
import { newsLoader } from "./pages/Main"

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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
