import Container from '../UI/Container';
import ProductList from './ProductList';
import classes from './Products.module.scss';

const Products = props => {
  return (
    <Container className="mb-5 center-text">
      <h1 className={classes.product__title}>Products</h1>
      <span className={classes.product__subtitle}>spring / summer 2022</span>
      <ProductList />
    </Container>
  );
};

export default Products;
