import AboutUs from '../Components/AboutUs/AboutUs';
import Blog from '../Components/blog/Blog';
import Products from '../Components/Product/Products';
import Main from '../Components/Layouts/Main';
import { Route, Routes } from 'react-router-dom';
import Banner from '../Components/Layouts/Header/Banner';

const Home = props => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Banner />} />
      </Routes>
      <AboutUs />
      <Products />
      <Blog />
    </Main>
  );
};

export default Home;
