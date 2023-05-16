import { Box, Typography } from "@mui/material"

import { NewsHeadlines } from "../widgets"
import { DatePublishPicker } from "../features"

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
    </>
  )
}

export default MainPage
