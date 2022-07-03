import ProductItem from './ProductItem';
import ProductItem2 from '../../assets/img/001.jpg';
import ProductItem3 from '../../assets/img/002.jpg';
import ProductItem4 from '../../assets/img/003.jpg';
import ProductItem5 from '../../assets/img/004.jpg';
import ProductItem6 from '../../assets/img/005.jpg';
import productImg from '../../assets/img/photo-1.jpg';
// import ProductItem7 from '../../assets/img/006.jpg';

// import classes from './ProductList.module.scss';
import GridList from '../UI/GridList';

const allProducts = [
  {
    id: 'p1',
    name: 'New Balance',
    price: 5,
    description: '237 Sneaker - Men',
    imgUrl: productImg,
  },
  {
    id: 'p2',
    name: 'adidas',
    price: 10,
    imgUrl: ProductItem2,
    description: 'Hoops 3.0 High-Top Sneak',
  },
  {
    id: 'p3',
    name: 'New Balance',
    price: 100,
    imgUrl: ProductItem3,
    description: '300 Court Sneaker - Men - amazing!',
  },
  {
    id: 'p4',
    name: 'adidas',
    price: 5,
    description: 'Grand Court Alpha Sneaker',
    imgUrl: ProductItem4,
  },
  {
    id: 'p5',
    name: 'Vans',
    price: 5,
    description: 'Asher Slip-On Sneaker - amazing!',
    imgUrl: ProductItem5,
  },
  {
    id: 'p6',
    name: 'Crocs',
    price: 5,
    description: 'Brooklyn Wedge Sandal - amazing!',
    imgUrl: ProductItem6,
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
