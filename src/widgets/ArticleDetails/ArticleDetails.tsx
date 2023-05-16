import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/store"

import { newsModel } from "../../entities"
import { IArticle, INewsData } from "../../shared"
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
  const [article, setArticle] = useState<IArticle>()
  const isInfinite = useAppSelector((state) => state.query.isInfinite)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!page || !pageSize || !id) return
    dispatch(
      newsModel.fetchArticleById({
        id: isInfinite ? id : +id,
        page: +page,
        pageSize: +pageSize,
      })
    )
      .unwrap()
      .then((promiseResult: INewsData) => {
        setArticle(promiseResult.articles[0])
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
  }, [])

  if (!article) return <Preloader />
  return <Article article={article} />
}

export default ArticleDetails
