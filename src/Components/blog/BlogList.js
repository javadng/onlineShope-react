import GridList from '../UI/GridList';
import BlogItem from './BlogItem';

const BlogList = props => {
  return (
    <GridList>
      <BlogItem
        date={{ day: '22', month: 'aug' }}
        categories="your categories"
        title="A simple blog post: creative design"
      />
      <BlogItem
        date={{ day: '22', month: 'aug' }}
        categories="your categories"
        title="A simple blog post: creative design"
      />
      <BlogItem
        date={{ day: '22', month: 'aug' }}
        categories="your categories"
        title="A simple blog post: creative design"
      />
    </GridList>
  );
};
export default BlogList;
