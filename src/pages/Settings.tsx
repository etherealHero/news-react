import { Box, Typography } from "@mui/material"

import { ChangeFontSize, SliderPageSize, ToggleTheme } from "../features"
import { ThemeMode } from "../entities"

function SettingsPage() {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Настройки
      </Typography>
      <Box sx={{ mb: 1, display: "flex", columnGap: 2, alignItems: "center" }}>
        Цветовая тема:
        <ToggleTheme />
        <ThemeMode />
      </Box>
      <Box
        sx={{
          mb: 1,
          display: "flex",
          columnGap: 2,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        Размер шрифта:
        <ChangeFontSize />
      </Box>
      <Box
        sx={{
          mb: 1,
          display: { xs: "block", sm: "flex" },
          columnGap: 2,
          alignItems: "center",
        }}
      >
        Количество новостей на странице:
        <SliderPageSize />
      </Box>
    </>
  )
}

export default SettingsPage
