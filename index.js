function Header() {
  return (
      <header>
          <nav className="nav">
              <img src="./react-logo.png" className="nav-logo custom-image" alt="React Logo" />
              <ul className="nav-items">
                  <li>Pricing</li>
                  <li>About</li>
                  <li>Contact</li>
              </ul>
          </nav>
      </header>
  )
}

function MainContent() {
  return (
      <div className="main-content">
          <h1>Reasons I'm excited to learn React</h1>
          <ol>
              <li>It's declarative</li>
              <li>It's actively maintained by skilled people</li>
              <li>It's a hireable skill</li>
          </ol>
      </div>
  )
}

function Footer() {
  return (
      <footer className="footer">
          <p className="copyright">© 2023 Ramirez development. All rights reserved.</p>
      </footer>
  )
}

function Page() {
  return (
      <div>
          <Header />
          <MainContent />
          <Footer />
      </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))
