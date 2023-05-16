import Grid from "@mui/material/Unstable_Grid2"
import { Box } from "@mui/material"
import { useAppSelector } from "../../../app/store"

import { PaginationNews } from "../../../features"
import { Article, SkeletonArticleCard } from "../../../entities"

type Props = {
  isInfinite: boolean
}

const List = ({ isInfinite }: Props) => {
  const { status, articles } = useAppSelector((state) => state.news)

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
      >
        {articles.map((article, idx) => (
          <Article article={article} key={idx} idx={idx} />
        ))}
        {status === "pending" && (
          <>
            <SkeletonArticleCard />
            <SkeletonArticleCard />
            <SkeletonArticleCard />
            <SkeletonArticleCard />
          </>
        )}
      </Grid>
      {!isInfinite && (
        <Box display="flex" justifyContent="center" mt={4} mb={2}>
          <PaginationNews />
        </Box>
      )}
    </>
  )
}

export default List
