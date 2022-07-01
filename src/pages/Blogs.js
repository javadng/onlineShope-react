import SideBar from '../Components/blog/singleBlog/SideBar';
import Main from '../Components/Layouts/Main';
import ContainerGrid from '../Components/UI/ContainerGrid';

import Banner from '../Components/Layouts/Header/Banner';

import classes from './Blogs.module.scss';
import BlogList from '../Components/blog/singleBlog/BlogList';

const Blogs = props => {
  return (
    <Main>
      <Banner
        subTitle="Blog Posts"
        title="Some Post"
        desc="Responsive React.js WebApp"
      />
      <ContainerGrid className={classes.blogs}>
        <SideBar className={classes.side} />
        <BlogList className={classes.contents} />
      </ContainerGrid>
    </Main>
  );
};

export default Blogs;
