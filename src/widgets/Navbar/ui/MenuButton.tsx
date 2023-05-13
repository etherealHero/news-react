import { SetStateAction } from "react"
import { Menu } from "@mui/icons-material"
import { IconButton } from "@mui/material"

type Props = {
  setMenuIsOpen: (value: SetStateAction<boolean>) => void
}

const MenuButton = ({ setMenuIsOpen }: Props) => {
  return (
    <IconButton
      color="inherit"
      sx={{ display: { xs: "flex", sm: "none" }, mr: -3, alignItems: "center" }}
      onClick={() => setMenuIsOpen(true)}
    >
      <Menu />
    </IconButton>
  )
}

export default MenuButton
