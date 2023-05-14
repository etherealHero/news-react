import Article from "./ui/Article"
import { SkeletonArticle } from "./ui/Skeleton"
import newsReducer, { newsModel } from "./model/news"
import queryReducer, { queryModel } from "./model/query"

export {
  newsModel,
  newsReducer,
  Article,
  SkeletonArticle,
  queryReducer,
  queryModel,
}
