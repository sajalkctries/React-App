const Header = ({websiteName}) => {
  return (
    <>
    <header>
      <div className="logo">
        <a href="index.html">{websiteName}</a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="login-signup">
        <button className="log-in">Log in</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </header>
    <hr />
    </>
  );
};

export default Header;
