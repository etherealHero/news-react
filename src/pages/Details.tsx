import { useEffect, useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  Skeleton,
  Typography,
} from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useAppDispatch } from "../app/store"
import { ArrowBack, ArrowOutward, TodayOutlined } from "@mui/icons-material"

import { newsModel } from "../entities"
import { IArticle, INewsData, Image } from "../shared"
import dayjs from "dayjs"

function DetailsPage() {
  const navigate = useNavigate()

  const [article, setArticle] = useState<IArticle>()
  const { id } = useParams()
  const [searchParams, _] = useSearchParams()

  const dispatch = useAppDispatch()

  useEffect(() => {
    const page = searchParams.get("page")
    const pageSize = searchParams.get("pageSize")
    if (!page || !pageSize || !id) return
    dispatch(
      newsModel.fetchArticleById({ id: +id, page: +page, pageSize: +pageSize })
    )
      .unwrap()
      .then((promiseResult: INewsData) => {
        setArticle(promiseResult.articles[0])
      })
  }, [])

  if (article)
    return (
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "center", m: "0 -1rem 1rem" }}
      >
        <Grid xs={12} sm={10} md={8}>
          <Button variant="text" onClick={() => navigate("/")} sx={{ mb: 2 }}>
            <ArrowBack sx={{ mr: 1, ml: -1 }} />
            Назад
          </Button>
          <Typography
            gutterBottom
            variant="h5"
            sx={{
              color: "inherit",
              textDecoration: "none",
              lineHeight: 1,
            }}
          >
            {article.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight={500}
            mb={2}
            mt={2}
            display="flex"
            alignItems="center"
            columnGap={1}
          >
            <TodayOutlined fontSize="small" />
            Дата публикации: {dayjs(article.publishedAt).format("D MMMM, h:mm")}
          </Typography>
          <Box sx={{ width: { xs: "70%", sm: "100%" }, m: "0 auto" }}>
            <Image src={article.urlToImage} />
          </Box>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ textDecoration: "none" }}
          >
            {article.description}
          </Typography>
          <Button
            sx={{ mt: 2 }}
            component="a"
            target="_blank"
            href={article.url}
            variant="outlined"
            fullWidth
          >
            Источник
            <ArrowOutward
              fontSize="small"
              sx={{ position: "relative", top: -1, left: 4 }}
            />
          </Button>
        </Grid>
      </Grid>
    )

  return (
    <Grid
      container
      spacing={3}
      sx={{ justifyContent: "center", m: "0 -1rem 1rem" }}
    >
      <Grid xs={12} sm={10} md={8}>
        <Card variant="outlined" sx={{ boxShadow: 3 }}>
          <Box sx={{ bgcolor: "grey.400" }}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="100%"
              height={320}
              sx={{ bgcolor: "grey.500" }}
            />
          </Box>
          <CardContent>
            <Box display="flex" alignItems="center" columnGap={1}>
              <Skeleton width="30%" animation="wave" />
              <Skeleton width="10%" animation="wave" />
            </Box>
            <Typography gutterBottom variant="h5" bgcolor="gray.300">
              <Skeleton animation="wave" sx={{ bgcolor: "grey.400" }} />
              <Skeleton animation="wave" sx={{ bgcolor: "grey.400" }} />
              <Skeleton
                animation="wave"
                width="82%"
                sx={{ bgcolor: "grey.400" }}
              />
            </Typography>
            <Typography variant="body2">
              <Skeleton animation="wave" width="100%" />
              <Skeleton animation="wave" width="100%" />
              <Skeleton animation="wave" width="100%" />
              <Skeleton animation="wave" width="100%" />
              <Skeleton animation="wave" width="100%" />
              <Skeleton animation="wave" width="80%" />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default DetailsPage
