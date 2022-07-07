import Main from '../Components/Layouts/Main';

import classes from './singlepage.module.scss';
import ProductDetail from '../Components/Product/SingleProduct/ProductDetail';
import ProductRelated from '../Components/Product/SingleProduct/ProductRelated';
// import ProductList from '../Components/Product/ProductList';
import SectionTitle from '../Components/UI/SectionTitle';

import useHttp from '../hooks/use-http';
import { getSingleProduct } from '../lib/getSingleProduct';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { uiActions } from '../store/ui-slice';
import LoadingSpinner from '../Components/UI/spinners/LoadingSpinner';

const SingleProduct = props => {
  const params = useParams();
  const [sendRequestFn, productData] = useHttp(getSingleProduct);
  // const { notification } = useSelector(state => state.UI);

  useEffect(() => {
    sendRequestFn(params.productId);
  }, [sendRequestFn, params.productId]);

  uiActions.showNotification({
    status: productData.status,
  });

  let pageContent;

  if (productData.status === 'SUCCESS') {
    pageContent = (
      <div className={classes.single__product}>
        <ProductRelated className={classes.related} />
        <ProductDetail
          productDetail={productData.data}
          className={classes.detaile}
        />
        <SectionTitle
          title="New Products"
          subtitle="Summer 2022"
          className={classes.newProductsTitle}
        />
      </div>
    );
  } else {
    // } if (notification?.status === 'LOADING') {
    pageContent = <LoadingSpinner />;
  }

  return <Main>{pageContent}</Main>;
};

export default SingleProduct;
