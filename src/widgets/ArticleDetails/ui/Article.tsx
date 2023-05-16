import { Box, Button, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { ArrowOutward, TodayOutlined } from "@mui/icons-material"

import { DateFormat, GoBack, IArticle, Image } from "../../../shared"

type Props = {
  article: IArticle
}

const Article = ({ article }: Props) => {
  return (
    <Grid
      container
      spacing={3}
      sx={{ justifyContent: "center", m: "0 -1rem 1rem" }}
    >
      <Grid xs={12} sm={10} md={8}>
        <GoBack />
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
          Дата публикации: <DateFormat date={article.publishedAt} />
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
