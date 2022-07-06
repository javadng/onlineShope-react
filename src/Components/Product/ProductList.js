import ProductItem from './ProductItem';

import GridList from '../UI/GridList';
import { useSelector } from 'react-redux';
import Spinner from '../UI/spinners/Spinner';
import Overlay from '../UI/Modal/Overlay';
import React, { Fragment, useEffect, useState } from 'react';

import classes from './ProductLists.module.scss';
import useFilter from '../../hooks/use-filter';
import FilterItems from '../filter/FilterItems';
import Pagination from '../pagination/Pagination';

const ProductList = props => {
  const { products } = useSelector(state => state.products);
  const { notification } = useSelector(state => state.UI);

  const [priceLimit, setPriceLimit] = useState(500);
  const [filterState, filterFunHandler] = useFilter();
  const [productsShown, setProductShown] = useState([]);

  let productContent;
  let minPrice = 0;
  let maxPrice = 0;

  useEffect(() => {
    filterFunHandler(productsShown, priceLimit);
  }, [filterFunHandler, priceLimit, productsShown]);

  if (notification?.status === 'LOADING') {
    productContent = (
      <Fragment>
        <Spinner />
        <Overlay />
      </Fragment>
    );
  }

  if (products.length === 0) {
    productContent = (
      <Fragment>
        <p className="center-text fs-5 warning-color">
          {notification?.message}
        </p>
      </Fragment>
    );
  }

  if (products && products.length > 0) {
    minPrice = filterState.minPrices;
    maxPrice = filterState.maxPrices + 10;

    <Fragment>
      {
        (productContent = filterState.filterdItems?.map(product => (
          <ProductItem
            key={product.id}
            img={product.imgUrl}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        )))
      }
    </Fragment>;
  }

  return (
    <section className={classes.producSection}>
      <FilterItems setValue={setPriceLimit} min={minPrice} max={maxPrice} />
      <GridList className={classes.gridlist}>
        {productContent}
        <Pagination
          setPostsState={setProductShown}
          currentPage={1}
          postPerPage={4}
          allPosts={products}
          className={classes.pagination}
        />
      </GridList>
      ;
    </section>
  );
};

export default ProductList;
