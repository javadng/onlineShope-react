import ProductItem from './ProductItem';

import GridList from '../UI/GridList';
import { useSelector } from 'react-redux';
import Spinner from '../UI/spinners/Spinner';
import Overlay from '../UI/Modal/Overlay';
import React, { Fragment, useEffect, useState } from 'react';

import classes from './ProductLists.module.scss';
import useFilter from '../../hooks/use-filter';
import FilterItems from '../filter/FilterItems';

const ProductList = props => {
  const { products } = useSelector(state => state.products);
  const { notification } = useSelector(state => state.UI);

  const [priceLimit, setPriceLimit] = useState(500);
  const [filteredItems, filterFunHandler] = useFilter();

  let productContent;

  useEffect(() => {
    filterFunHandler(products, priceLimit);
  }, [filterFunHandler, priceLimit, products]);

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
    productContent = filteredItems.map(product => (
      <ProductItem
        key={product.id}
        img={product.imgUrl}
        id={product.id}
        name={product.name}
        price={product.price}
        description={product.description}
      />
    ));
  }

  return (
    <section className={classes.producSection}>
      <FilterItems setValue={setPriceLimit} />
      <GridList className={classes.gridlist}>{productContent}</GridList>;
    </section>
  );
};

export default ProductList;
