import axios from "axios"
import { EDateVariants, INewsData } from "."

import dayjs from "dayjs"
import weekday from "dayjs/plugin/weekday"
import utc from "dayjs/plugin/utc"
import "dayjs/locale/ru"

dayjs.locale("ru")
dayjs.extend(weekday)
dayjs.extend(utc)

const API_KEY = "9fcc431ab7874ef2b1004c587bca86c2"

const baseUrl = `https://newsapi.org/v2/everything?q=технологии&language=ru&apiKey=${API_KEY}&domains=techinsider.ru,habr.com,lifehacker.ru,computerra.ru,servernews.ru,xakep.ru,iphones.ru,cnews.ru,snob.ru,3dnews.ru,overclockers.ru,droider.ru&sortBy=publishedAt`

interface INewsAPI {
  page: number
  pageSize: number
  dateVariant: EDateVariants
  date: string | null
}

export const newsAPI = {
  get: async ({
    page,
    pageSize,
    dateVariant,
    date = dayjs().format(),
  }: INewsAPI) => {
    // await new Promise((r) => setTimeout(r, 100000000000000))

    const urlWithPages = `${baseUrl}&pageSize=${pageSize}&page=${page}`
    let res

    switch (dateVariant) {
      case EDateVariants.today: {
        const from = dayjs().format("YYYY-MM-DD")

        res = await axios<INewsData>(`${urlWithPages}&from=${from}`)
        break
      }

      case EDateVariants.yesterday: {
        const from = dayjs().subtract(1, "day").format("YYYY-MM-DD")
        const to = dayjs().subtract(1, "day").format("YYYY-MM-DD")

        res = await axios<INewsData>(`${urlWithPages}&from=${from}&to=${to}`)
        break
      }

      case EDateVariants.lastweek: {
        const from = dayjs().weekday(-7).format("YYYY-MM-DD")
        const to = dayjs().weekday(-1).format("YYYY-MM-DD")

        res = await axios<INewsData>(`${urlWithPages}&from=${from}&to=${to}`)
        break
      }

      case EDateVariants.pickdate: {
        const to = dayjs(date).format("YYYY-MM-DD")

        res = await axios<INewsData>(`${urlWithPages}&to=${to}`)
        break
      }

      case EDateVariants.all:
      default: {
        const to = dayjs().subtract(1, "day").format("YYYY-MM-DD")

        res = await axios<INewsData>(`${urlWithPages}&to=${to}`)
        break
      }
    }

    return res
  },
}
