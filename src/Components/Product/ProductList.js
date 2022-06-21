import ProductItem from './ProductItem';
// import classes from './ProductList.module.scss';
import productImg from '../../assets/img/photo-1.jpg';
import GridList from '../UI/GridList';

const allProducts = [
  {
    id: 'p1',
    name: 'My first book',
    price: 5,
    description: 'This is a first product - amazing!',
    imgUrl: productImg,
  },
  {
    id: 'p2',
    name: 'My second book',
    price: 10,
    imgUrl: productImg,
    description: 'This is a second product - amazing!',
  },
  {
    id: 'p3',
    name: 'My Third book',
    price: 100,
    imgUrl: productImg,
    description: 'This is a Third product - amazing!',
  },
];

const ProductList = props => {
  return (
    <GridList className={props.className}>
      {allProducts.map(product => (
        <ProductItem
          key={product.id}
          img={product.imgUrl}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </GridList>
  );
};

export default ProductList;
