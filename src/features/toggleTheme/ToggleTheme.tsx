import { useAppDispatch, useAppSelector } from "../../app/store"
import { Switch } from "@mui/material"

import { themeModel } from "../../entities/theme/model"

const ToggleTheme = () => {
  const theme = useAppSelector(themeModel.mode)
  const dispatch = useAppDispatch()

  return (
    <Switch
      checked={theme === "dark" ? true : false}
      onChange={() => dispatch(themeModel.toggleMode())}
      inputProps={{ "aria-label": "controlled" }}
    />
  )
}

export default ToggleTheme
