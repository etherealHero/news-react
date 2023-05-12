import { Box, Typography } from "@mui/material"
import { Map } from "../widgets"

function AboutPage() {
  return (
    <>
      <Typography variant="h4">О нас</Typography>
      <Typography sx={{ mt: 2 }} textAlign="justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        nisi dolor dicta dolores laudantium, nulla voluptatem ipsam at
        cupiditate sint doloremque atque nobis illum explicabo:
      </Typography>
      <Box
        sx={{
          mt: 2,
          mb: 2,
          background: "#ccc",
        }}
      >
        <Map />
      </Box>
      <Typography sx={{ mt: 1 }} textAlign="justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        nisi dolor dicta dolores laudantium, nulla voluptatem ipsam at
        cupiditate sint doloremque atque nobis illum explicabo aspernatur
        ratione tenetur dignissimos saepe!
      </Typography>
      <Typography sx={{ mt: 1 }} textAlign="justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        nisi dolor dicta dolores laudantium, nulla voluptatem ipsam at
        cupiditate sint doloremque atque nobis illum explicabo aspernatur
        ratione tenetur dignissimos saepe! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Doloremque quasi pariatur ullam nemo eius
        quo, libero id minus reiciendis porro. Quo doloremque dolorum voluptate
        quaerat quam tempore doloribus atque totam.
      </Typography>
    </>
  )
}

export default AboutPage
