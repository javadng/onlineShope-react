import React, { Suspense, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './store/ui-slice';
import { Route, Routes } from 'react-router-dom';

import Tooltip from './Components/UI/tooltip/Tooltip';
import Home from './pages/Home';
import Spinner from './Components/UI/spinners/Spinner';
import SingleBlog from './pages/SingleBlog';

/*  */

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { getHomePageData } from './store/homePage-actions';

library.add(fas, faTwitter, faFontAwesome);

const Blogs = React.lazy(() => import('./pages/Blogs'));
const Checkout = React.lazy(() => import('./pages/Checkout'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const SingleProduct = React.lazy(() => import('./pages/SingleProduct'));
const Categories = React.lazy(() => import('./pages/Categories'));

const App = () => {
  const dispatch = useDispatch();

  const uiSlice = useSelector(state => state.UI);
  const { notification } = uiSlice;

  useEffect(() => {
    dispatch(getHomePageData());
  }, [dispatch]);

  if (notification?.status === 'ADD_ITEM') {
    setTimeout(() => {
      dispatch(uiActions.closeTooltip());
    }, 3000);
  }

  return (
    <Suspense fallback={<Spinner />}>
      {notification?.status === 'ADD_ITEM' && (
        <Tooltip message={notification.message} status={notification.status} />
      )}
      {notification?.status === 'ERROR' && (
        <Tooltip message={notification.message} status={notification.status} />
      )}
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/:productId" element={<SingleProduct />} />
        <Route path="/blog/:blogId" element={<SingleBlog />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Suspense>
  );
};

export default App;
