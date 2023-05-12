import { NewsHeadlines } from "../widgets"
import { getNews } from "../shared"

export const newsLoader = async () => await getNews()

function MainPage() {
  return (
    <>
      <h1>Main Page</h1>
      <NewsHeadlines />
    </>
  )
}

export default MainPage
