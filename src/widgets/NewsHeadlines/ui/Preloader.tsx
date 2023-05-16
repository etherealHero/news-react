import { SkeletonArticle } from "../../../entities"
import { useSearchParams } from "react-router-dom"

const Preloader = () => {
  const [searchParams] = useSearchParams()

  return <SkeletonArticle length={Number(searchParams.get("pageSize")) || 3} />
}

export default Preloader
