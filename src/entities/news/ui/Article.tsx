import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { Link } from "react-router-dom"
import { IArticle } from "../../../shared"

type Props = {
  article: IArticle
  idx: number
}

const Article = ({ article, idx }: Props) => {
  return (
    <Grid xs={12} sm={6} md={4}>
      <Card variant="outlined" sx={{ boxShadow: 3 }}>
        <Link to={`/news/${idx}`}>
          <Box bgcolor="primary.main" position="relative" height={180}>
            <Typography
              variant="h3"
              sx={{
                position: "absolute",
                zIndex: 0,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontFamily: "serif",
                fontWeight: 500,
                color: "#fff",
              }}
            >
              News
            </Typography>
            <CardMedia
              sx={{
                height: 180,
                width: "100%",
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 10,
                bgcolor: "transparent",
              }}
              image={article.urlToImage}
              title="article image"
            />
          </Box>
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
