import { Outlet } from "react-router-dom"
import { Navbar } from "../widgets"
import { Container } from "@mui/material"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ pt: 2, pb: 2 }}>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
