import Main from '../Components/Layouts/Main';

import classes from './singlepage.module.scss';
import ProductDetail from '../Components/Product/SingleProduct/ProductDetail';
import ProductRelated from '../Components/Product/SingleProduct/ProductRelated';
import ProductList from '../Components/Product/ProductList';
import SectionTitle from '../Components/UI/SectionTitle';

const productInfo = {
  id: 'p3',
  name: 'Amazing Shoes!',
  price: 100,
  quantity: 1,
  baseImgUrl: 'https://s6.uupload.ir/files/photo-1_aum5.jpg',
  subImgsUrl: [
    { img: 'https://s6.uupload.ir/files/photo-1_aum5.jpg', id: 'img1' },
    { img: 'https://s6.uupload.ir/files/photo-6_4oe4.jpg', id: 'img2' },
    { img: 'https://s6.uupload.ir/files/photo-5_bzyr.jpg', id: 'img3' },
    { img: 'https://s6.uupload.ir/files/photo-4_rx0r.jpg', id: 'img4' },
    { img: 'https://s6.uupload.ir/files/photo-3_6332.jpg', id: 'img5' },
    { img: 'https://s6.uupload.ir/files/photo-2_vkrs.jpg', id: 'img6' },
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
