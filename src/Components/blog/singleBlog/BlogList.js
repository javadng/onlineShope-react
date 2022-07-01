import BlogItem from './BlogItem';

import imgBlog1 from '../../../assets/img/blog-1.jpg';
import imgBlog2 from '../../../assets/img/blog-2.jpg';
import imgBlog3 from '../../../assets/img/blog-3.jpg';

import classes from './blogList.module.scss';

const DUMMY__Blog = [
  {
    id: 'b1',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: imgBlog1,
    date: '10 Aug',
    year: '2022',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veniam facilis, minima deserunt eveniet veritatis maiores esse rem natus atque. Reprehenderit qui tempore iure vero. Similique quasi officiis modi inventore.',
  },
  {
    id: 'b2',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: imgBlog2,
    date: '15 Aug',
    year: '2022',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veniam facilis, minima deserunt eveniet veritatis maiores esse rem natus atque. Reprehenderit qui tempore iure vero. Similique quasi officiis modi inventore.',
  },
  {
    id: 'b3',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: imgBlog3,
    date: '23 Aug',
    year: '2022',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veniam facilis, minima deserunt eveniet veritatis maiores esse rem natus atque. Reprehenderit qui tempore iure vero. Similique quasi officiis modi inventore.',
  },
];

const BlogList = props => {
  return (
    <ul className={classes.list}>
      {DUMMY__Blog.map(item => (
        <BlogItem
          image={item.image}
          title={item.title}
          date={item.date}
          year={item.year}
          id={item.id}
          key={item.id}
          desc={item.desc}
        />
      ))}
    </ul>
  );
};

export default BlogList;
