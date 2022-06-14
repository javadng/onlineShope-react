import AboutUs from './Components/AboutUs/AboutUs';
import { Fragment } from 'react';

import Header from './Components/Layouts/Header/Header';
import Products from './Components/Product/Products';
import Blog from './Components/blog/Blog';
import Footer from './Components/Layouts/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from './Components/UI/tooltip/Tooltip';
import { uiActions } from './store/ui-slice';

const App = () => {
  const dispatch = useDispatch();

  const uiSlice = useSelector(state => state.UI);
  const { notification } = uiSlice;

  if (notification) {
    setTimeout(() => {
      dispatch(uiActions.closeTooltip());
    }, 5000);
  }

  return (
    <Fragment>
      {notification && <Tooltip message={notification.message} />}
      <Header />
      <main>
        <AboutUs />
        <Products />
        <Blog />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
