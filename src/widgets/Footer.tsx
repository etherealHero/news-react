import { Box, Container, Link as MLink, Paper, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Paper sx={{ width: "100%", bgcolor: grey[900] }} square>
      <Container sx={{ pt: 3, pb: 4 }}>
        <Typography color="white" variant="h5" align="center" mb={1}>
          News
        </Typography>
        <Typography color="#888" align="center" variant="body2">
          Copyright © 2023 News, Inc
        </Typography>
        <Box display="flex" gap={2} justifyContent="center" mt={3} color="#fff">
          <MLink component={Link} to="/">
            главная
          </MLink>
          |
          <MLink component={Link} to="/about">
            о нас
          </MLink>
          |
          <MLink component={Link} to="/support">
            помощь
          </MLink>
        </Box>
      </Container>
    </Paper>
  )
}

export default Footer
