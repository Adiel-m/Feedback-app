import { NavLink } from 'react-router-dom'

function Navbar({ textColor, bgColor }) {
  const pages = [
    { name: 'About', url: 'about' },
    { name: 'Contact', url: 'contact' },
  ]

  const navStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <>
      <nav id="navbar" className="container" style={navStyles}>
        <NavLink to="/">Feedback App</NavLink>
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <NavLink
                to={`/${page.url}`}
                className={({ isActive, isPending }) =>
                  isPending ? 'pending' : isActive ? 'active' : ''
                }
              >
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

Navbar.defaultProps = {
  textColor: 'hsl(var(--white)/0.6)',
  bgColor: 'hsl(var(--secondary)/0.6)',
}

export default Navbar
