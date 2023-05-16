import Grid from "@mui/material/Unstable_Grid2"
import SkeletonCard from "./SkeletonCard"

const skeleton = (length: number) => {
  const jsx = []

  for (let i = 0; i < length; i++) {
    jsx.push(<SkeletonCard key={i} />)
  }

  return (
    <Grid
      container
      spacing={3}
      sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
    >
      {jsx}
    </Grid>
  )
}

export const SkeletonArticle = ({ length }: { length: number }) =>
  skeleton(length)
