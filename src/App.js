import AboutUs from './Components/AboutUs/AboutUs';
import { Fragment } from 'react';

import Header from './Components/Layouts/Header/Header';
import Products from './Components/Product/Products';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <AboutUs />
        <Products />
      </main>
    </Fragment>
  );
};

export default App;
