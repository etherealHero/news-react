import { useEffect } from "react"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { useAppDispatch, useAppSelector } from "../app/store"

import { Article, SkeletonArticle, newsModel } from "../entities"
import { useNavigate, useSearchParams } from "react-router-dom"

const NewsHeadlines = () => {
  const [searchParams] = useSearchParams()
  const { status, error, articles } = useAppSelector((state) => state.news)
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const query = useAppSelector((state) => state.query)

  useEffect(() => {
    navigate(`/?page=${query.page}&pageSize=${query.pageSize}`)
  }, [query])

  useEffect(() => {
    dispatch(newsModel.fetchNews())
  }, [])

  if (status === "pending")
    return (
      <SkeletonArticle length={Number(searchParams.get("pageSize")) || 3} />
    )
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
