import ReactDOM from "react-dom/client"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

import { persistor, store } from "./app/store"
// import { store } from "./app/store"
import Routes from "./app/Routing"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Routes />
    </PersistGate>
  </Provider>
)
