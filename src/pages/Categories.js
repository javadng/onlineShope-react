import Main from '../Components/Layouts/Main';

import SectionTitle from '../Components/UI/SectionTitle';
import ProductList from '../Components/Product/ProductList';

import classes from './categories.module.scss';
import { useSelector } from 'react-redux';

const Categories = props => {
  const { products } = useSelector(state => state.products);
  const { notification } = useSelector(state => state.UI);

  return (
    <Main>
      <div className={classes.categories}>
        <SectionTitle title="New Products" subtitle="summer 2022" />
        <ProductList products={products} notification={notification} />
        <SectionTitle title="Offer Products" subtitle="June 2022" />
        <ProductList products={products} notification={notification} />
        <SectionTitle title="most sell" subtitle="last weak" />
        <ProductList products={products} notification={notification} />
      </div>
    </Main>
  );
};

export default Categories;
