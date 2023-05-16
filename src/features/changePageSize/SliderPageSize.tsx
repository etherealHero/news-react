import { Slider } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/store"

import { queryModel } from "../../entities"
import { marks } from "./config"

const SliderPageSize = () => {
  const dispatch = useAppDispatch()
  const pageSize = useAppSelector((state) => state.query.pageSize)

  const value = marks.find((mark) => mark.pageSize === pageSize)?.value || 0

  const changeHandler = (
    _: Event | React.SyntheticEvent<Element, Event>,
    value: number | number[]
  ) => {
    const pageSize = marks.find((mark) => mark.value === value)?.pageSize || 3

    dispatch(queryModel.setPageSizeWithReset(pageSize))
    dispatch(queryModel.setIsInfiniteQuery(value === 100))
  }

  return (
    <Slider
      step={null}
      value={value}
      valueLabelDisplay="off"
      marks={marks}
      sx={{ maxWidth: { xs: "75%", sm: 200 }, ml: 2 }}
      onChange={changeHandler}
    />
  )
}

export default SliderPageSize
