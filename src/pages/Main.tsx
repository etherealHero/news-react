import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import { Link, useLoaderData } from "react-router-dom"

import { INewsData, getNews } from "../shared"

export const newsLoader = async () => await getNews()

const MainPage = () => {
  const { articles } = useLoaderData() as INewsData

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
        {articles.length &&
          articles.map((article, idx) => (
            <Grid xs={10} sm={6} md={4} key={idx}>
              <Card
                variant="outlined"
                component={Link}
                to={`/news/${idx}`}
                sx={{ textDecoration: "none", boxShadow: 3 }}
              >
                <CardMedia
                  sx={{ height: 180 }}
                  image={article.urlToImage}
                  title="article image"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
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
          ))}
      </Grid>
    </>
  )
}

export default MainPage
