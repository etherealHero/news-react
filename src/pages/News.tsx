import { useLoaderData } from "react-router-dom"
import { INewsData } from "../shared"

function NewsPage() {
  const data = useLoaderData() as INewsData

  console.log(data)

  return (
    <>
      <h1>News Page</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        nisi dolor dicta dolores laudantium, nulla voluptatem ipsam at
        cupiditate sint doloremque atque nobis illum explicabo aspernatur
        ratione tenetur dignissimos saepe!
      </div>
    </>
  )
}

export default NewsPage
