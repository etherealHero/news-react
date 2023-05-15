import axios from "axios"
import { EDateVariants, INewsData } from "."

import dayjs from "dayjs"
import weekday from "dayjs/plugin/weekday"
import "dayjs/locale/ru"

dayjs.locale("ru")
dayjs.extend(weekday)

const API_KEY = "d5b30b1afd82498a992311089ea92b4c"
// const API_KEY = "3d507fc9f30b4a7d9efeb083c18b25c8"
// const API_KEY = "b121cb1b4a2b4016b3f526cc5c51fa59"

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

        console.log(to)

        res = await axios<INewsData>(`${urlWithPages}&to=${to}`)
        break
      }

      case EDateVariants.all:
      default:
        res = await axios<INewsData>(urlWithPages)
        break
    }

    return res
  },
}
