

const Footer = () => {
  return (
    <footer>
      <div className="socials-containers">
        <span>
          <i className="fa-brands fa-facebook"></i>
        </span>
        <span>
          <i className="fa-brands fa-instagram"></i>
        </span>
        <span>
          <i className="fa-brands fa-twitter"></i>
        </span>
        <span>
          <i className="fa-brands fa-linkedin-in"></i>
        </span>
        <span>
          <i className="fa-brands fa-youtube"></i>
        </span>
      </div>
      <div className="footer-nav">
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
      </div>
      <div className="copyright"> &copy; Copyright All rights reserved</div>
    </footer>
  );
};

export default Footer;
