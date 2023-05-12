import { Help, Home, Info, Settings } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { Tabs as MTabs, Tab } from "@mui/material"

import { useRouteMatch } from "../lib"

const Tabs = () => {
  const routeMatch = useRouteMatch(["/", "/support", "/settings", "/about"])
  const currentTab = routeMatch?.pattern?.path || "/"

  return (
    <MTabs
      value={currentTab}
      textColor="inherit"
      TabIndicatorProps={{ style: { background: "#fff" } }}
      component="nav"
      sx={{ display: { xs: "none", sm: "flex" }, mr: -3 }}
    >
      <Tab
        label="Главная"
        value="/"
        to="/"
        component={Link}
        icon={<Home />}
        iconPosition="start"
      />
      <Tab
        label="Настройки"
        value="/settings"
        to="/settings"
        component={Link}
        icon={<Settings />}
        iconPosition="start"
      />
      <Tab
        label="Помощь"
        value="/support"
        to="/support"
        component={Link}
        icon={<Help />}
        iconPosition="start"
      />
      <Tab
        label="О нас"
        value="/about"
        to="/about"
        component={Link}
        icon={<Info />}
        iconPosition="start"
      />
    </MTabs>
  )
}

export default Tabs
