import { Pagination } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/store"
import { newsModel, queryModel } from "../../entities"

const PaginationNews = () => {
  const { page, pageSize } = useAppSelector((state) => state.query)
  const total = useAppSelector((state) => state.news.totalResults)
  const count = Math.floor(total / pageSize)

  const dispatch = useAppDispatch()

  const changeHandler = (_: React.ChangeEvent<unknown>, page: number) => {
    dispatch(queryModel.setPage(page))

    dispatch(newsModel.fetchNews())
  }

  if (!count) return <></>

  return (
    <Pagination
      count={count}
      page={page}
      onChange={changeHandler}
      color="primary"
      shape="rounded"
    />
  )
}

export default PaginationNews
