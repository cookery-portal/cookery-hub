import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <span>© {new Date().getFullYear()} Cookery Portal. All rights reserved.</span>
    </footer>
  );
}
export default Footer;