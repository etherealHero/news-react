import { Box, Container, Link as MLink, Paper, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Paper sx={{ width: "100%", bgcolor: grey[900] }} square>
      <Container sx={{ pt: 3, pb: 4 }}>
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
        <Typography color="#888" align="center" variant="body2">
          Copyright © 2023 News, Inc
        </Typography>
        <Box display="flex" gap={2} justifyContent="center" mt={3} color="#fff">
          <MLink
            component={Link}
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            главная
          </MLink>
          |
          <MLink
            component={Link}
            to="/about"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            о нас
          </MLink>
          |
          <MLink
            component={Link}
            to="/support"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            помощь
          </MLink>
        </Box>
      </Container>
    </Paper>
  )
}

export default Footer
