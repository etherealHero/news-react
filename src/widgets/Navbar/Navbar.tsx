import { useState } from "react"
import { AppBar, Toolbar, Typography, Container } from "@mui/material"

import { Drawer, MenuButton, Tabs } from "./ui"

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <AppBar position="sticky" enableColorOnDark>
        <Container>
          <Toolbar sx={{ display: "flex", columnGap: 4 }}>
            <Typography
              component="a"
              href="/"
              sx={{ flexGrow: 1, ml: -3, textDecoration: "none" }}
              variant="h5"
              color="inherit"
            >
              News
            </Typography>
            <MenuButton setMenuIsOpen={setMenuIsOpen} />
            <Tabs />
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </>
  )
}
