import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav>
        <Link to="/">Inicio</Link> |{' '}
        <Link to="/contact">Contacto</Link> |{' '}
        <Link to="/about">About Me</Link> |{' '}
        <Link to="/photos">Fotos</Link>
      </nav>
  )
}
