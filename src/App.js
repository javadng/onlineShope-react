import { Fragment } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Tooltip from './Components/UI/tooltip/Tooltip';
import { uiActions } from './store/ui-slice';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';

import { Route, Routes } from 'react-router-dom';
import SingleBlog from './pages/SingleBlog';
import Checkout from './pages/Checkout';
import ContactUs from './pages/ContactUs';
import Categories from './pages/Categories';

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
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/:productId" element={<SingleProduct />} />
        <Route path="/blog" element={<SingleBlog />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Fragment>
  );
};

export default App;
