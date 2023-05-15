import { useEffect } from "react"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { useAppDispatch, useAppSelector } from "../app/store"

import { Article, SkeletonArticle, newsModel } from "../entities"

const NewsHeadlines = () => {
  const { status, error, articles } = useAppSelector((state) => state.news)
  const { pageSize } = useAppSelector((state) => state.query)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(newsModel.fetchNews())
  }, [])

  if (status === "pending") return <SkeletonArticle length={pageSize} />
  if (status === "rejected") return <Typography>{error}</Typography>

  if (articles && articles.length)
    return (
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
      >
        {articles.map((article, idx) => (
          <Article article={article} key={idx} idx={idx} />
        ))}
      </Grid>
    )

  return (
    <Typography variant="h5" align="center" mt={10}>
      Ничего не найдено
    </Typography>
  )
}

export default NewsHeadlines
