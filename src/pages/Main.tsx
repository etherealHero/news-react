import { useEffect } from "react"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

import { useAppDispatch, useAppSelector } from "../app/store"
import { Article, newsModel } from "../entities"

const MainPage = () => {
  const newsState = useAppSelector((state) => state.news)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(newsModel.fetchNews())
  }, [])

  if (newsState.status === "pending") return <>Loading...</>
  if (newsState.status === "error") return <>{newsState.error}</>

  return (
    <>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Главная
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
      >
        {newsState.articles.length &&
          newsState.articles.map((article, idx) => (
            <Article article={article} key={idx} idx={idx} />
          ))}
      </Grid>
    </>
  )
}

export default MainPage
