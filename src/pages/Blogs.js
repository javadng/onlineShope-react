import SideBar from '../Components/blog/blogPage/SideBar';
import BlogList from '../Components/blog/blogPage/BlogList';
import BlogLayout from '../Components/blog/layout-blog/BlogLayout';

import classes from './Blogs.module.scss';

const Blogs = props => {
  return (
    <BlogLayout className={classes.blogs}>
      <SideBar className={classes.side} />
      <BlogList className={classes.contents} />
    </BlogLayout>
  );
};

export default Blogs;
