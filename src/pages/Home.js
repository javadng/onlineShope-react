import AboutUs from '../Components/AboutUs/AboutUs';
import Blog from '../Components/blog/Blog';
import Products from '../Components/Product/Products';
import Main from '../Components/Layouts/Main';

const Home = props => {
  return (
    <Main>
      <AboutUs />
      <Products />
      <Blog />
    </Main>
  );
};

export default Home;
