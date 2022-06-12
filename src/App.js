import AboutUs from './Components/AboutUs/AboutUs';
import { Fragment } from 'react';

import Header from './Components/Layouts/Header/Header';
import Products from './Components/Product/Products';
import Blog from './Components/blog/Blog';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <AboutUs />
        <Products />
        <Blog />
      </main>
    </Fragment>
  );
};

export default App;
