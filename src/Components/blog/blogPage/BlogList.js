import BlogItem from './BlogItem';

import imgBlog1 from '../../../assets/img/blog-1.jpg';
import imgBlog2 from '../../../assets/img/blog-2.jpg';
import imgBlog3 from '../../../assets/img/blog-3.jpg';

import classes from './blogList.module.scss';
import Pagination from '../../pagination/Pagination';
import { useState } from 'react';

const DUMMY__Blog = [
  {
    id: 'b1',
    title: '6 Free Blog Post Templates',
    image: imgBlog1,
    date: '10 Aug',
    year: '2022',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veniam facilis, minima deserunt eveniet veritatis maiores esse rem natus atque. Reprehenderit qui tempore iure vero. Similique quasi officiis modi inventore.',
  },
  {
    id: 'b2',
    title: 'Fill out the form to get started blogging.',
    image: imgBlog2,
    date: '15 Aug',
    year: '2022',
    desc: 'If you’ve ever read a blog post, you’ve consumed content from a thought leader that is an expert in their industry. Chances are if the blog post was written effectively, you came away with helpful knowledge and a positive opinion about the writer or brand that produced the content.',
  },
  {
    id: 'b3',
    title: 'Simple Blog Title',
    image: imgBlog3,
    date: '2 Aug',
    year: '2022',
    desc: 'For instance, if your readers are millennials looking to start a business, you probably dont need to provide them with information about getting started on social media — most of them already have that down.',
  },
  {
    id: 'b4',
    title: 'Identify your unique angle.',
    image: imgBlog1,
    date: '3 Aug',
    year: '2022',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veniam facilis, minima deserunt eveniet veritatis maiores esse rem natus atque. Reprehenderit qui tempore iure vero. Similique quasi officiis modi inventore.',
  },
  {
    id: 'b5',
    title: 'Create your blog domain.',
    image: imgBlog2,
    date: '4 Aug',
    year: '2022',
    desc: 'Blog posts allow you and your business to publish insights, thoughts, and stories on your website about any topic. They can help you boost brand awareness, credibility, conversions, and revenue. Most importantly, they can help you drive traffic to your website.',
  },
  {
    id: 'b6',
    title: 'Create your blog fasest domain.',
    image: imgBlog2,
    date: '5 Aug',
    year: '2022',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veniam facilis, minima deserunt eveniet veritatis maiores esse rem natus atque. Reprehenderit qui tempore iure vero. Similique quasi officiis modi inventore.',
  },
  {
    id: 'b7',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: imgBlog3,
    date: '6 Aug',
    year: '2022',
    desc: 'If you’ve heard about blogging but are a beginner and don’t know where to start, the time for excuses is over because we’ll cover how to write and manage your business s blog as well as provide helpful simplify your blogging efforts.',
  },
  {
    id: 'b8',
    title: 'Choose a CMS and set up your blog.',
    image: imgBlog2,
    date: '7 Aug',
    year: '2022',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veniam facilis, minima deserunt eveniet veritatis maiores esse rem natus atque. Reprehenderit qui tempore iure vero. Similique quasi officiis modi inventore.',
  },
  {
    id: 'b9',
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    image: imgBlog2,
    date: '8 Aug',
    year: '2022',
    desc: 'Anyone can connect with their audience through blogging and enjoy the myriad benefits that blogging provides: organic traffic from search engines, promotional content for social media, and recognition from a new audience you haven’t tapped into yet.',
  },
];

const BlogList = props => {
  const [posts, setPosts] = useState([]);

  return (
    <ul className={classes.list}>
      {posts.map(item => (
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
      <Pagination setPostsState={setPosts} allPosts={DUMMY__Blog} />
    </ul>
  );
};

export default BlogList;
