import { useRouteError } from "react-router-dom"

function ErrorPage() {
  const error = useRouteError()
  console.log("React-router-dom 404: ", error)

  return (
    <>
      <h1>404! Page not found</h1>
    </>
  )
}

export default ErrorPage
