/* eslint-disable react/prop-types */
import Footer from './Footer';
import Header from './Header';
import './styles.css';
const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </section>
  );
};

export default Layout;
