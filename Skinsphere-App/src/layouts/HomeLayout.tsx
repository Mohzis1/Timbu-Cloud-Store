import Navbar from '../component/navbar.tsx';
import Footer from '../component/Footer.tsx';
import SecondFrame from '../component/SecondFrame.tsx';
import SearchBar from '../component/SearchBar.tsx';
import ProductBars from '../component/ProductBars.tsx';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <SecondFrame />
      <SearchBar />
      <ProductBars />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
