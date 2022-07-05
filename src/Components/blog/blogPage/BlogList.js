import BlogItem from './BlogItem';

import classes from './blogList.module.scss';
import Pagination from '../../pagination/Pagination';
import { Fragment, useEffect, useState } from 'react';
import useHttp from '../../../hooks/use-http';
import { getBlogsList } from '../../../lib/getBlogsList';
import Spinner from '../../UI/spinners/Spinner';
import Overlay from '../../UI/Modal/Overlay';

const BlogList = props => {
  const [posts, setPosts] = useState([]);
  const [sendRequest, httpState] = useHttp(getBlogsList);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [posts]);

  if (httpState.status === 'SUCCESS') {
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
        <Pagination setPostsState={setPosts} allPosts={httpState.data} />
      </ul>
    );
  } else {
    return (
      <Fragment>
        <Spinner />
        <Overlay />
      </Fragment>
    );
  }
};

export default BlogList;
