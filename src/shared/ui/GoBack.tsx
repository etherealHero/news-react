import { ArrowBack } from "@mui/icons-material"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

const GoBack = () => {
  const navigate = useNavigate()

  return (
    <Button variant="text" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
      <ArrowBack sx={{ mr: 1, ml: -1 }} />
      Назад
    </Button>
  )
}

export default GoBack
