import { Button } from "@mui/material"
import { Counter } from "../features/counter/Counter"
import { NewsHeadlines } from "../widgets"

function MainPage() {
  return (
    <>
      <h1>Main Page</h1>
      <NewsHeadlines />
      <Button variant="contained">Hello World</Button>
      <Counter />
    </>
  )
}

export default MainPage
