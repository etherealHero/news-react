import Grid from "@mui/material/Unstable_Grid2"
import { Link, useLocation } from "react-router-dom"
import { TodayOutlined } from "@mui/icons-material"
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"

import { DateFormat, IArticle } from "../../../shared"

type Props = {
  article: IArticle
  idx: number
}

const Article = ({ article, idx }: Props) => {
  const { search } = useLocation()

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
            variant="body2"
            color="text.secondary"
            fontWeight={500}
            mb="2px"
            display="flex"
            alignItems="center"
            columnGap={1}
          >
            <DateFormat date={article.publishedAt} />
            <TodayOutlined fontSize="small" />
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component={Link}
            to={`/news/${idx + search}`}
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
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
            component={Link}
            to={`/news/${idx + search}`}
          >
            Перейти
          </Button>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Article
