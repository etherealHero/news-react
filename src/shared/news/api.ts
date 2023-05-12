import axios from "axios"
import { baseUrl } from "./config"
import { INewsData } from "./types"
import { data as fakeData } from "./fakeData"

export const getNews = async (): Promise<INewsData> => {
  try {
    const { data } = await axios<INewsData>(`${baseUrl}&pageSize=10&page=1`)

    return data
  } catch (error) {
    return fakeData as INewsData
  }
}
