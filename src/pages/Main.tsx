import { Box, Typography } from "@mui/material"

import { NewsHeadlines } from "../widgets"
import { DatePublishPicker, PaginationNews } from "../features"

const MainPage = () => {
  return (
    <>
      <Box
        display={{ xs: "block", sm: "flex" }}
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4">Главная</Typography>
        <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
          <Typography>Дата публикации:</Typography>
          <DatePublishPicker />
        </Box>
      </Box>
      <NewsHeadlines />
      <Box display="flex" justifyContent="center" mt={4} mb={2}>
        <PaginationNews />
      </Box>
    </>
  )
}

export default MainPage
