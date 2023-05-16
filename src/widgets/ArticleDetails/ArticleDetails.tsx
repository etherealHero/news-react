import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/store"

import { newsModel } from "../../entities"
import { Article, Preloader } from "./ui"

type Props = {
  params: {
    id: string | undefined
    page: string | null
    pageSize: string | null
  }
}

const ArticleDetails = ({ params }: Props) => {
  const { id, page, pageSize } = params
  const isInfinite = useAppSelector((state) => state.query.isInfinite)
  const news = useAppSelector((state) => state.news)
  const dispatch = useAppDispatch()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })

    if (isInfinite && id) {
      dispatch(newsModel.setDetails(news.articles[+id]))
      return
    }

    if (id && page && pageSize) {
      dispatch(
        newsModel.fetchArticleById({
          id: +id,
          page: +page,
          pageSize: +pageSize,
        })
      )
      return
    }
  }, [])

  if (!news.articleDetails) return <Preloader />
  return <Article article={news.articleDetails} />
}

export default ArticleDetails
