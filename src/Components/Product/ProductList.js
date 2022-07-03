import ProductItem from './ProductItem';

import GridList from '../UI/GridList';

const allProducts = [
  {
    id: 'p1',
    name: 'New Balance',
    price: 5,
    description: '237 Sneaker - Men',
    imgUrl: 'https://s6.uupload.ir/files/001_71gj.jpg',
  },
  {
    id: 'p2',
    name: 'adidas',
    price: 10,
    imgUrl: 'https://s6.uupload.ir/files/002_2m2w.jpg',
    description: 'Hoops 3.0 High-Top Sneak',
  },
  {
    id: 'p3',
    name: 'New Balance',
    price: 100,
    imgUrl: 'https://s6.uupload.ir/files/003_9k43.jpg',
    description: '300 Court Sneaker - Men - amazing!',
  },
  {
    id: 'p4',
    name: 'adidas',
    price: 5,
    description: 'Grand Court Alpha Sneaker',
    imgUrl: 'https://s6.uupload.ir/files/004_3hyi.jpg',
  },
  {
    id: 'p5',
    name: 'Vans',
    price: 5,
    description: 'Asher Slip-On Sneaker - amazing!',
    imgUrl: 'https://s6.uupload.ir/files/005_39bs.jpg',
  },
  {
    id: 'p6',
    name: 'Crocs',
    price: 5,
    description: 'Brooklyn Wedge Sandal - amazing!',
    imgUrl: 'https://s6.uupload.ir/files/photo-1_aum5.jpg',
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
