import { useState } from "react"
import {
  FormControl,
  Select,
  SelectChangeEvent,
  Typography,
  MenuItem,
} from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../../app/store"
import dayjs from "dayjs"

import { newsModel, queryModel } from "../../../entities"
import { EDateVariants } from "../../../shared"
import DatePickerModal from "./DatePickerModal"

const DatePublishPicker = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { dateVariant, date } = useAppSelector((state) => state.query)
  const dispatch = useAppDispatch()

  const changeHandler = (e: SelectChangeEvent) => {
    let variant = e.target.value as EDateVariants

    if (variant === EDateVariants.canceldate) variant = EDateVariants.all
    if (variant === EDateVariants.pickdate) variant = dateVariant

    dispatch(queryModel.setDateVariant(variant))

    if (e.target.value === EDateVariants.pickdate) return handleOpen()

    dispatch(queryModel.setDate(null))
    dispatch(queryModel.setPage(1))
    dispatch(newsModel.removeArticles())
    dispatch(newsModel.fetchNews())
  }

  return (
    <>
      <FormControl sx={{ minWidth: 80 }}>
        <Select
          defaultValue={EDateVariants.all}
          value={date ? EDateVariants.date : dateVariant}
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
            <MenuItem value={EDateVariants.date} divider>
              {dayjs(date).format("D MMM YYYY[ г.]")}
            </MenuItem>
          )}
          {date && (
            <MenuItem value={EDateVariants.canceldate}>
              <Typography color="primary">Сбросить</Typography>
            </MenuItem>
          )}
        </Select>
      </FormControl>
      <DatePickerModal handleClose={handleClose} open={open} />
    </>
  )
}

export default DatePublishPicker
