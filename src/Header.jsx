const Header = () => {
  return (
    <>
    <header>
      <div className="logo">
        <a href="index.html">Squile</a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
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
