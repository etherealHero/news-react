export interface INewsData {
  status: string
  totalResults: number
  articles: IArticle[]
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
