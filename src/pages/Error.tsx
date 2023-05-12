import { ArrowBack } from "@mui/icons-material"
import { Button, Typography, Box } from "@mui/material"
import { AxiosError } from "axios"
import { useRouteError, useNavigate } from "react-router-dom"

interface INewsApiErrorResponse {
  code: string
  message: string
  status: string
}

function ErrorPage() {
  const res = useRouteError() as AxiosError
  const error = res.response?.data as INewsApiErrorResponse

  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Typography variant="h1" textAlign="center" sx={{ fontWeight: "bold" }}>
        Упс!
      </Typography>
      <Typography variant="h5" textAlign="center">
        Что-то пошло не так
      </Typography>
      <Typography variant="h5" textAlign="center">
        {error?.code}
      </Typography>
      <Typography variant="h5" textAlign="center">
        {error?.message}
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        <ArrowBack sx={{ mr: 1, ml: -1 }} />
        Назад
      </Button>
    </Box>
  )
}

export default ErrorPage
