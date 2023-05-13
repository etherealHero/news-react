import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/store"

import { themeModel } from "../../entities"

const ChangeFontSize = () => {
  const fontsize = useAppSelector(themeModel.fontsize)
  const dispatch = useAppDispatch()

  const changeHandler = (e: SelectChangeEvent) => {
    dispatch(themeModel.setFontSize(+e.target.value))
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <Select
        value={"" + fontsize}
        onChange={changeHandler}
        displayEmpty
        autoWidth
      >
        <MenuItem value={11}>Очень маленький</MenuItem>
        <MenuItem value={13}>Маленький</MenuItem>
        <MenuItem value={16}>Стандартный</MenuItem>
        <MenuItem value={20}>Крупный</MenuItem>
        <MenuItem value={24}>Большой</MenuItem>
      </Select>
    </FormControl>
  )
}

export default ChangeFontSize
