export interface INewsData {
  status: string
  totalResults: number
  articles: IArticle[]
  message?: string
}

export interface IArticle {
  source: {
    id: null
    name: string
  }
  author: null | string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export enum EDateVariants {
  all = "all",
  today = "today",
  yesterday = "yesterday",
  lastweek = "lastweek",
  pickdate = "pickdate",
}
