import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/store"
import { newsModel, queryModel } from "../../entities"

export const useQuery = () => {
  const [fetching, setFetching] = useState(false)
  const dispatch = useAppDispatch()
  const query = useAppSelector((state) => state.query)

  useEffect(() => {
    if (!fetching || !query.isInfinite) return
    if ((query.page + 1) * query.pageSize >= 100) return

    dispatch(queryModel.setPage(query.page + 1))
    dispatch(newsModel.fetchNews()).finally(() => setFetching(false))
  }, [fetching])

  useEffect(() => {
    if (!query.isInfinite) return

    const scrollHandler = (e: Event) => {
      const scrollHeight = (e.target as Document).documentElement.scrollHeight
      const scrollTop = (e.target as Document).documentElement.scrollTop
      const windowHeight = window.innerHeight

      if (scrollHeight - scrollTop - windowHeight < 200) setFetching(true)
    }

    document.addEventListener("scroll", scrollHandler)
    return () => document.removeEventListener("scroll", scrollHandler)
  }, [])

  return query
}
