import Main from '../Components/Layouts/Main';

import SectionTitle from '../Components/UI/SectionTitle';
import ProductList from '../Components/Product/ProductList';
import Container from '../Components/UI/Container';
import Spinner from '../Components/UI/spinners/Spinner';

const Categories = props => {
  return (
    <Main>
      <Container>
        <SectionTitle title="New Products" subtitle="summer 2022" />
        <ProductList />
        <SectionTitle title="Offer Products" subtitle="June 2022" />
        <ProductList />
        <SectionTitle title="most sell" subtitle="last weak" />
        <ProductList />
      </Container>
    </Main>
  );
};

export default Categories;
