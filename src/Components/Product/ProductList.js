import ProductItem from './ProductItem';

import GridList from '../UI/GridList';
import { useSelector } from 'react-redux';
import Spinner from '../UI/spinners/Spinner';
import Overlay from '../UI/Modal/Overlay';
import { Fragment } from 'react';

import classes from './ProductLists.module.scss';

const ProductList = props => {
  const { products } = useSelector(state => state.products);
  const { notification } = useSelector(state => state.UI);

  let productContent;

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
    productContent = products.map(product => (
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

  return <GridList className={classes.list}>{productContent}</GridList>;
};

export default ProductList;
