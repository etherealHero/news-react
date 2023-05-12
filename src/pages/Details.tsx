import { Typography } from "@mui/material"
import { useParams } from "react-router-dom"

function DetailsPage() {
  const params = useParams()

  return (
    <>
      <Typography variant="h4">Новости</Typography>
      <Typography sx={{ mt: 2 }} textAlign="justify">
        Lorem: {params.id}
      </Typography>
    </>
  )
}

export default DetailsPage
