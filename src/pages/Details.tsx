import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { ArticleDetails } from "../widgets"

function DetailsPage() {
  const { id } = useParams()
  const [searchParams, _] = useSearchParams()
  const navigate = useNavigate()

  const page = searchParams.get("page")
  const pageSize = searchParams.get("pageSize")

  if (!page || !pageSize || !id) navigate(-1)

  return <ArticleDetails params={{ id, page, pageSize }} />
}

export default DetailsPage
