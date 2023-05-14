import { Outlet } from "react-router-dom"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { useAppSelector } from "./store"
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  darkScrollbar,
} from "@mui/material"

import { Navbar } from "../widgets"
import { ReactNode } from "react"

const Layout = ({ children }: { children?: ReactNode }) => {
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
      primary: {
        main: "#bf0410",
      },
      secondary: {
        main: "#048dba",
      },
    },
  })

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Navbar />
        <Container sx={{ pt: 2, pb: 2 }}>
          <Outlet />
          {children}
        </Container>
      </ThemeProvider>
    </LocalizationProvider>
  )
}

export default Layout
