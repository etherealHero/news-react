import { NavLink } from "react-router-dom"

const styles = ({ isActive }: { isActive: boolean }) =>
  isActive ? { textDecoration: "underline", color: "#f00" } : {}

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink style={styles} to="/">
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink style={styles} to="/settings">
              Настройки
            </NavLink>
          </li>
          <li>
            <NavLink style={styles} to="/support">
              Помощь
            </NavLink>
          </li>
          <li>
            <NavLink style={styles} to="/about">
              О нас
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
