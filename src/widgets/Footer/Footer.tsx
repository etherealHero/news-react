import { Box, Container, Link as MLink, Paper, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { Link } from "react-router-dom"
import { links } from "./config"
import { Logo } from "../../shared"

const Footer = () => {
  return (
    <Paper sx={{ width: "100%", bgcolor: grey[900] }} square>
      <Container sx={{ pt: 3, pb: 4 }}>
        <Logo />
        <Typography color="#888" align="center" variant="body2">
          Copyright © 2023 News, Inc
        </Typography>
        <Box display="flex" gap={2} justifyContent="center" mt={3} color="#fff">
          {links.map((link, id) => (
            <>
              <MLink
                component={Link}
                to={link.to}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {link.title}
              </MLink>
              {links.length !== id + 1 ? "|" : ""}
            </>
          ))}
        </Box>
      </Container>
    </Paper>
  )
}

export default Footer
