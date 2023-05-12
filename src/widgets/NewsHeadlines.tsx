import { useLoaderData } from "react-router-dom"
import { INewsData } from "../shared"

const NewsHeadlines = () => {
  const { articles } = useLoaderData() as INewsData

  console.log(articles)

  return (
    <ul>
      {articles.length &&
        articles.map((article, idx) => (
          <li
            key={idx}
            style={{ marginBottom: 10, border: "1px solid #000", padding: 10 }}
          >
            <img
              src={article.urlToImage}
              alt="article title"
              style={{
                width: "50%",
                objectFit: "contain",
              }}
            />
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <p>{article.publishedAt}</p>
            <br />
          </li>
        ))}
    </ul>
  )
}

export default NewsHeadlines
