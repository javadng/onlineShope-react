import React, { Fragment } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './store/ui-slice';
import { Route, Routes } from 'react-router-dom';

import Tooltip from './Components/UI/tooltip/Tooltip';
import Home from './pages/Home';

const SingleBlog = React.lazy(() => import('./pages/SingleBlog'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const SingleProduct = React.lazy(() => import('./pages/SingleProduct'));
const Categories = React.lazy(() => import('./pages/Categories'));

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
