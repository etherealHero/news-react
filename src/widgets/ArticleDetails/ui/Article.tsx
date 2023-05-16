import { Box, Button, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { ArrowBack, ArrowOutward, TodayOutlined } from "@mui/icons-material"
import dayjs from "dayjs"
import { useNavigate } from "react-router-dom"

import { IArticle, Image } from "../../../shared"

type Props = {
  article: IArticle
}

const Article = ({ article }: Props) => {
  const navigate = useNavigate()

  return (
    <Grid
      container
      spacing={3}
      sx={{ justifyContent: "center", m: "0 -1rem 1rem" }}
    >
      <Grid xs={12} sm={10} md={8}>
        <Button variant="text" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
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
          Дата публикации:{" "}
          {dayjs(article.publishedAt).utc().format("D MMMM, h:mm")}
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
}

export default Article
