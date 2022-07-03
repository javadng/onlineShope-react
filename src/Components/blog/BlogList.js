import GridList from '../UI/GridList';
import BlogItem from './BlogItem';

const DUMMY__Blog = [
  {
    id: 'b1',
    date: { day: '22', month: 'aug' },
    title: 'A simple blog post: creative design',
    categories: 'Your categories',
  },
  {
    id: 'b2',
    date: { day: '2', month: 'aug' },
    title: 'A simple blog post: creative design',
    categories: 'Your categories',
  },
  {
    id: 'b3',
    date: { day: '22', month: 'Jun' },
    title: 'A simple blog post: creative design',
    categories: 'Your categories',
  },
];

const BlogList = props => {
  return (
    <GridList>
      {DUMMY__Blog.map(item => (
        <BlogItem
          key={item.id}
          id={item.id}
          date={item.date}
          title={item.title}
          categories={item.categories}
        />
      ))}
    </GridList>
  );
};
export default BlogList;
