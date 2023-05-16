import { useState, useEffect } from "react"
import { Box, Button, Modal, Typography } from "@mui/material"
import { DateCalendar } from "@mui/x-date-pickers"
import dayjs, { Dayjs } from "dayjs"
import { useAppDispatch } from "../../../app/store"

import { newsModel, queryModel } from "../../../entities"
import { EDateVariants } from "../../../shared"

type Props = {
  open: boolean
  handleClose: () => void
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  pb: 2,
}

const DatePickerModal = ({ open, handleClose }: Props) => {
  const [date, setDate] = useState<Dayjs | null>(dayjs())
  const dispatch = useAppDispatch()

  const handleClick = () => {
    dispatch(queryModel.setDate(date?.toISOString() || ""))
    dispatch(queryModel.setDateVariant(EDateVariants.pickdate))
    dispatch(queryModel.setPage(1))
    dispatch(newsModel.removeArticles())
    dispatch(newsModel.fetchNews())
    handleClose()
  }

  useEffect(() => {
    setDate(dayjs())
  }, [open])

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <DateCalendar value={date} onChange={(newDate) => setDate(newDate)} />
        <Typography m={3} mt={0} variant="subtitle1">
          Поиск новостей, опубликованных:
          <Typography sx={{ overflowWrap: "normal" }} fontWeight={600}>
            {dayjs(date).format("[до ]D MMM YYYY[ г.]")}
          </Typography>
        </Typography>
        <Box display="flex" justifyContent="end" gap={2} mr={2}>
          <Button variant="outlined" size="small" onClick={handleClose}>
            Отмена
          </Button>
          <Button variant="contained" size="small" onClick={handleClick}>
            Найти
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default DatePickerModal
