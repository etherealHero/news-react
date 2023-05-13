import { Help, Home, Info, Settings } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { Tabs as MTabs, Tab, useMediaQuery } from "@mui/material"

import { useRouteMatch } from "../lib"

const Tabs = () => {
  const routeMatch = useRouteMatch(["/", "/support", "/settings", "/about"])
  const currentTab = routeMatch?.pattern?.path || "/"
  const showIcons = useMediaQuery("(min-width:900px)")

  return (
    <MTabs
      value={currentTab}
      textColor="inherit"
      TabIndicatorProps={{ style: { background: "#fff" } }}
      component="nav"
      sx={{ display: { xs: "none", sm: "flex" }, mr: -3 }}
      variant="scrollable"
      scrollButtons="auto"
    >
      <Tab
        label="Главная"
        value="/"
        to="/"
        component={Link}
        icon={showIcons ? <Home /> : undefined}
        iconPosition="start"
      />
      <Tab
        label="Настройки"
        value="/settings"
        to="/settings"
        component={Link}
        icon={showIcons ? <Settings /> : undefined}
        iconPosition="start"
      />
      <Tab
        label="Помощь"
        value="/support"
        to="/support"
        component={Link}
        icon={showIcons ? <Help /> : undefined}
        iconPosition="start"
      />
      <Tab
        label="О нас"
        value="/about"
        to="/about"
        component={Link}
        icon={showIcons ? <Info /> : undefined}
        iconPosition="start"
      />
    </MTabs>
  )
}

export default Tabs
