import { Card, CardContent, Typography, Skeleton, Box } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

const SkeletonCard = () => {
  return (
    <Grid xs={12} sm={6} md={4}>
      <Card variant="outlined" sx={{ boxShadow: 3 }}>
        <Box sx={{ bgcolor: "grey.400" }}>
          <Skeleton
            animation="wave"
            variant="rectangular"
            width="100%"
            height={180}
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
            <Skeleton animation="wave" width="80%" />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SkeletonCard
