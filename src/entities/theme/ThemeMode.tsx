import { Typography } from "@mui/material"
import { useAppSelector } from "../../app/store"
import { themeModel } from "./model"

const ThemeMode = () => {
  const theme = useAppSelector(themeModel.mode)

  return <Typography>{theme === "light" ? "Дневная" : "Ночная"}</Typography>
}

export default ThemeMode
