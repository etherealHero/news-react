import { Box, Card, CardContent, Typography, Skeleton } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

const Preloader = () => {
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

export default Preloader
