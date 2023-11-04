import { Outlet } from 'react-router-dom';
import Header from '../../layouts/Header/Header';
import Footer from '../../layouts/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* This will render the matched child route's component */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;