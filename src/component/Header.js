
import './Header.css'

const Header = () => {

  const navLinks = ["Home", "About", "Projects"];
  const handleClickLogo = () => {
    document.getElementById("homeSection").scrollIntoView({ behavior: "smooth" })
  }

  const renderNavLink = (content) => {
    const scrollToId = `${content.toLowerCase()}Section`;

    const handleClickNav = () => {
      document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" })
    }

    return (
      <ul key={content}>
        <li>
          <button
            onClick={handleClickNav}
          >{content}</button>
        </li>
      </ul>
    )
  }
  
  return (
    <header className="header">
      <div className="container">
        <div className="navContainer">
          <h1 onClick={handleClickLogo}>Abdi Fatah Hersi</h1>
          <nav>
            {navLinks.map(nav => renderNavLink(nav))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header