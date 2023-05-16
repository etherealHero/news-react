import { Box, Typography } from "@mui/material"

const Logo = () => {
  return (
    <Typography
      color="white"
      variant="h5"
      mb={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
      columnGap={1}
    >
      News
      <Box
        component="img"
        sx={{
          height: 32,
          width: 32,
        }}
        alt="Logo"
        src="/android-chrome-192x192.png"
      />
    </Typography>
  )
}

export default Logo
