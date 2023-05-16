import { useEffect } from "react"
import { Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/store"
import { useNavigate } from "react-router-dom"

import { newsModel, queryModel } from "../../entities"
import { Preloader, List, EmptyList } from "./ui"
import { useQuery } from "./lib"

const NewsHeadlines = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const news = useAppSelector((state) => state.news)
  const query = useQuery()

  useEffect(() => {
    navigate(`/?page=${query.page}&pageSize=${query.pageSize}`)
  }, [query])

  useEffect(() => {
    if (query.isInfinite && !news.articleDetails) {
      dispatch(queryModel.setPageSizeWithReset(query.pageSize))
      dispatch(newsModel.removeArticles())
      dispatch(newsModel.fetchNews())
    }
    if (!query.isInfinite) {
      dispatch(newsModel.removeArticles())
      dispatch(newsModel.fetchNews())
    }
    dispatch(newsModel.removeDetails())
  }, [])

  if (news.status === "pending" && !query.isInfinite) return <Preloader />
  if (news.status === "rejected") return <Typography>{news.error}</Typography>
  if (news.status !== "pending" && !news.articles?.length) return <EmptyList />
  return <List isInfinite={!!query.isInfinite} />
}

export default NewsHeadlines
