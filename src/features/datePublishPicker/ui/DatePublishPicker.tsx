import { useState } from "react"
import MenuItem from "@mui/material/MenuItem"
import { FormControl, Select, SelectChangeEvent } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../app/store"
import { newsModel, queryModel } from "../../../entities"
import { EDateVariants } from "../../../shared"
import DatePickerModal from "./DatePickerModal"
import dayjs from "dayjs"

const DatePublishPicker = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { dateVariant, date } = useAppSelector((state) => state.query)
  const dispatch = useAppDispatch()

  const changeHandler = (e: SelectChangeEvent) => {
    if (e.target.value === EDateVariants.pickdate) return handleOpen()

    dispatch(queryModel.setDateVariant(e.target.value as EDateVariants))
    dispatch(queryModel.setDate(null))
    dispatch(queryModel.setPage(1))
    dispatch(newsModel.fetchNews())
  }

  return (
    <>
      <FormControl sx={{ minWidth: 80 }}>
        <Select
          value={date ? "date" : dateVariant}
          onChange={changeHandler}
          displayEmpty
          autoWidth
          size="small"
        >
          <MenuItem value={EDateVariants.all}>Любая</MenuItem>
          <MenuItem value={EDateVariants.today}>Сегодня</MenuItem>
          <MenuItem value={EDateVariants.yesterday}>Вчера</MenuItem>
          <MenuItem value={EDateVariants.lastweek}>На прошлой неделе</MenuItem>
          {!date && (
            <MenuItem value={EDateVariants.pickdate}>Установить дату</MenuItem>
          )}
          {date && (
            <MenuItem value={"date"}>
              {dayjs(date).format("D MMM YYYY[ г.]")}
            </MenuItem>
          )}
        </Select>
      </FormControl>
      <DatePickerModal handleClose={handleClose} open={open} />
    </>
  )
}

export default DatePublishPicker
