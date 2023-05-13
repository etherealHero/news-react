import { Box, Typography } from "@mui/material"

import { ChangeFontSize, ToggleTheme } from "../features"
import { ThemeMode } from "../entities"

function SettingsPage() {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Настройки
      </Typography>
      <Box sx={{ mb: 1, display: "flex", columnGap: 2, alignItems: "center" }}>
        Цветовая схема:
        <ToggleTheme />
        <ThemeMode />
      </Box>
      <Box sx={{ mb: 1, display: "flex", columnGap: 2, alignItems: "center" }}>
        Размер шрифта:
        <ChangeFontSize />
      </Box>
    </>
  )
}

export default SettingsPage
