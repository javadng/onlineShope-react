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
        <Route
          path="/"
          element={
            <Banner
              subTitle="terending 2022"
              title="Boutique Fashion"
              desc="Responsive React.js WebApp"
            />
          }
        />
      </Routes>
      <AboutUs />
      <Products isHomeList={true} />
      <Blog />
    </Main>
  );
};

export default Home;
