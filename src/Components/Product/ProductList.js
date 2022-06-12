import ProductItem from './ProductItem';
// import classes from './ProductList.module.scss';
import productImg from '../../assets/img/photo-1.jpg';
import GridList from '../UI/GridList';

const ProductList = props => {
  return (
    <GridList>
      <ProductItem img={productImg} title="T-shirt free-size" />
      <ProductItem img={productImg} title="T-shirt free-size" />
      <ProductItem img={productImg} title="T-shirt free-size" />
      <ProductItem img={productImg} title="T-shirt free-size" />
      <ProductItem img={productImg} title="T-shirt free-size" />
      <ProductItem img={productImg} title="T-shirt free-size" />
    </GridList>
  );
};

export default ProductList;
