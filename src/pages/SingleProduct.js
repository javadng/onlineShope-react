// import productImg from '../assets/img/photo-1.jpg';
import ContainerGrid from '../Components/UI/ContainerGrid';
import Main from '../Components/Layouts/Main';

import classes from './singlepage.module.scss';
import ProductDetail from '../Components/Product/SingleProduct/ProductDetail';
import ProductRelated from '../Components/Product/SingleProduct/ProductRelated';

// const product = {
//   id: 'p3',
//   name: 'My Third book',
//   price: 100,
//   imgUrl: productImg,
//   description: 'This is a Third product - amazing!',
// };

const SingleProduct = props => {
  // const { id, name, quantity, price } = props;
  return (
    <Main>
      <ContainerGrid className={classes.single__product}>
        <ProductRelated className={classes.related} />
        <ProductDetail className={classes.detaile} />
      </ContainerGrid>
    </Main>
  );
};

export default SingleProduct;
