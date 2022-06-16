// import productImg from '../assets/img/photo-1.jpg';
import ContainerGrid from '../Components/UI/ContainerGrid';
import Main from '../Components/Layouts/Main';

import classes from './singlepage.module.scss';

// const product = {
//   id: 'p3',
//   name: 'My Third book',
//   price: 100,
//   imgUrl: productImg,
//   description: 'This is a Third product - amazing!',
// };

const SingleProduct = props => {
  return (
    <Main>
      <ContainerGrid className={classes.single__product}>
        <div className={classes.related}>product related</div>
        <div className={classes.detaile}>product detaile</div>
      </ContainerGrid>
    </Main>
  );
};

export default SingleProduct;
