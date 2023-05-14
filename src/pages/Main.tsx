import { useEffect } from "react"
import { Box, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { useAppDispatch, useAppSelector } from "../app/store"

import { DatePublishPicker, PaginationNews } from "../features"
import { Article, SkeletonArticle, newsModel } from "../entities"

const MainPage = () => {
  const { status, error, articles } = useAppSelector((state) => state.news)
  const { pageSize } = useAppSelector((state) => state.query)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(newsModel.fetchNews())
  }, [])

  return (
    <>
      <Box
        display={{ xs: "block", sm: "flex" }}
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4">Главная</Typography>
        <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
          <Typography>Дата публикации:</Typography>
          <DatePublishPicker />
        </Box>
      </Box>
      {status === "pending" ? (
        <SkeletonArticle length={pageSize} />
      ) : status === "rejected" ? (
        <Typography>{error}</Typography>
      ) : articles?.length ? (
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
        >
          {articles.map((article, idx) => (
            <Article article={article} key={idx} idx={idx} />
          ))}
        </Grid>
      ) : (
        <Typography variant="h5" align="center" mt={10}>
          Ничего не найдено
        </Typography>
      )}
      <Box display="flex" justifyContent="center" mt={4}>
        <PaginationNews />
      </Box>
    </>
  )
}

export default MainPage
