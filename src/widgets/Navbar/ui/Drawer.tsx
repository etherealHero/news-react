import { SetStateAction } from "react"
import {
  Typography,
  Drawer as MDrawer,
  Button,
  Box,
  Divider,
} from "@mui/material"
import { useNavigate } from "react-router-dom"

type Props = {
  menuIsOpen: boolean
  setMenuIsOpen: (value: SetStateAction<boolean>) => void
}

const Drawer = ({ setMenuIsOpen, menuIsOpen }: Props) => {
  const navigate = useNavigate()

  const clickHandler = (to: string) => {
    setMenuIsOpen(false)
    navigate(to)
  }

  return (
    <MDrawer
      anchor="right"
      open={menuIsOpen}
      onClose={() => setMenuIsOpen(false)}
    >
      <Typography
        variant="h5"
        align="center"
        sx={{ mr: 4, ml: 4, mt: 3, mb: 1 }}
      >
        News
      </Typography>
      <Divider />
      <Box
        sx={{
          p: 4,
          pt: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => clickHandler(routes.main)}
          sx={{ textTransform: "initial" }}
        >
          Главная
        </Button>
        <Button
          onClick={() => clickHandler(routes.settings)}
          sx={{ textTransform: "initial" }}
        >
          Настройки
        </Button>
        <Button
          onClick={() => clickHandler(routes.support)}
          sx={{ textTransform: "initial" }}
        >
          Помощь
        </Button>
        <Button
          onClick={() => clickHandler(routes.about)}
          sx={{ textTransform: "initial" }}
        >
          О нас
        </Button>
      </Box>
    </MDrawer>
  )
}

export default Drawer

const routes: { [index: string]: string } = {
  main: "/",
  settings: "/settings",
  support: "/support",
  about: "/about",
}
