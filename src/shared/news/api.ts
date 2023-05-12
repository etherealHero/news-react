import axios from "axios"
import { baseUrl } from "./config"
import { INewsData } from "./types"

export const getNews = async () => {
  const { data } = await axios<INewsData>(`${baseUrl}&pageSize=10&page=1`)

  return data
}
