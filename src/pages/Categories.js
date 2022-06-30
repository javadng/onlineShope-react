import Main from '../Components/Layouts/Main';

import SectionTitle from '../Components/UI/SectionTitle';
import ProductList from '../Components/Product/ProductList';
import Container from '../Components/UI/Container';

import classes from './categories.module.scss';

const Categories = props => {
  return (
    <Main>
      <div className={classes.categories}>
        <SectionTitle title="New Products" subtitle="summer 2022" />
        <ProductList />
        <SectionTitle title="Offer Products" subtitle="June 2022" />
        <ProductList />
        <SectionTitle title="most sell" subtitle="last weak" />
        <ProductList />
      </div>
    </Main>
  );
};

export default Categories;
