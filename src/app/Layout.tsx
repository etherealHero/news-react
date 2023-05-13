import { Outlet } from "react-router-dom"
import { useAppSelector } from "./store"
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  darkScrollbar,
} from "@mui/material"

import { Navbar } from "../widgets"

const Layout = () => {
  const { fontsize, mode } = useAppSelector((store) => store.theme)

  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: (themeParam) => ({
          body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
        }),
      },
    },
    typography: {
      fontSize: fontsize,
    },
    palette: {
      mode,
    },
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Navbar />
        <Container sx={{ pt: 2, pb: 2 }}>
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Layout
