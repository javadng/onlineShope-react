import ProductItem from './ProductItem';
import classes from './ProductList.module.scss';
import productImg from '../../assets/img/photo-1.jpg';

const ProductList = props => {
  return (
    <ul className={classes.product}>
      <ProductItem img={productImg} title="T-shirt free-size" />
      <ProductItem img={productImg} title="T-shirt free-size" />
      <ProductItem img={productImg} title="T-shirt free-size" />
      <ProductItem img={productImg} title="T-shirt free-size" />
      <ProductItem img={productImg} title="T-shirt free-size" />
      <ProductItem img={productImg} title="T-shirt free-size" />
    </ul>
  );
};

export default ProductList;
