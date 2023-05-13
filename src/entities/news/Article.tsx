import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { Link } from "react-router-dom"
import { IArticle } from "../../shared"

type Props = {
  article: IArticle
  idx: number
}

const Article = ({ article, idx }: Props) => {
  return (
    <Grid xs={12} sm={6} md={4}>
      <Card variant="outlined" sx={{ boxShadow: 3 }}>
        <Link to={`/news/${idx}`}>
          <CardMedia
            sx={{ height: 180 }}
            image={article.urlToImage}
            title="article image"
          />
        </Link>
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component={Link}
            to={`/news/${idx}`}
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
              lineHeight: 1,
            }}
          >
            {article.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textDecoration: "none" }}
          >
            {article.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.publishedAt}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Article
