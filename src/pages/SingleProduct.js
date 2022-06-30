import subimg2 from '../assets/img/photo-2.jpg';
import subimg3 from '../assets/img/photo-3.jpg';
import subimg4 from '../assets/img/photo-4.jpg';
import subimg5 from '../assets/img/photo-5.jpg';
import subimg6 from '../assets/img/photo-6.jpg';
import originalPic from '../assets/img/photo-1.jpg';

import Main from '../Components/Layouts/Main';

import classes from './singlepage.module.scss';
import ProductDetail from '../Components/Product/SingleProduct/ProductDetail';
import ProductRelated from '../Components/Product/SingleProduct/ProductRelated';
import ProductList from '../Components/Product/ProductList';
import SectionTitle from '../Components/UI/SectionTitle';

const productInfo = {
  id: 'p3',
  name: 'Amazing Shoes! :)',
  price: 100,
  quantity: 1,
  baseImgUrl: originalPic,
  subImgsUrl: [
    { img: originalPic, id: 'img1' },
    { img: subimg2, id: 'img2' },
    { img: subimg3, id: 'img3' },
    { img: subimg4, id: 'img4' },
    { img: subimg5, id: 'img5' },
    { img: subimg6, id: 'img6' },
  ],
  description:
    'Some Text... (desc) Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti recusandae sunt quae aperiam repellat nostrum, incidunt nobis ipsa adipisci placeat error quidem tempora doloribus similique, eos quaerat rem! Et. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti recusandae sunt quae aperiam repellat nostrum, incidunt nobis ipsa adipisci placeat error quidem tempora doloribus similique, eos quaerat rem! Et. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi corrupti recusandae sunt quae aperiam repellat nostrum, incidunt nobis ipsa adipisci placeat error quidem tempora doloribus similique, eos quaerat rem! Et.',
  AdditionalInfo: 'Some Text... (Additional)',
  reviews: ['reviews'],
  viewsInfo: {
    commentsNumber: 4,
    viewsNumber: 21,
  },
};

const SingleProduct = props => {
  // const { id, name, quantity, price } = props;
  return (
    <Main>
      <div className={classes.single__product}>
        <ProductRelated className={classes.related} />
        <ProductDetail
          productDetail={productInfo}
          className={classes.detaile}
        />
        <SectionTitle
          title="New Products"
          subtitle="Summer 2022"
          className={classes.newProductsTitle}
        />
        <ProductList className={classes.newProducts} />
      </div>
    </Main>
  );
};

export default SingleProduct;
