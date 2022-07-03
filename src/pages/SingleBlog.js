import SideBar from '../Components/blog/blogPage/SideBar';
import BlogLayout from '../Components/blog/layout-blog/BlogLayout';

import imageBlog from '../assets/img/blog-1.jpg';

import classes from './singleBlog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const DUMMY__BLOG = {
  id: 'b1',
  title: 'Choose a CMS and set up your blog.',
  blogText:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
  image: imageBlog,
};

const SingleBlog = props => {
  return (
    <BlogLayout>
      <SideBar />
      <div className={classes.singleblog}>
        <figure className={classes.blogImg}>
          <img alt="" src={DUMMY__BLOG.image} />
        </figure>
        <h1 className={classes.title}>{DUMMY__BLOG.title}</h1>
        <article className={classes.blogtext}>
          <p>{DUMMY__BLOG.blogText}</p>
        </article>
        <footer>
          <div className={classes.icons}>
            <FontAwesomeIcon icon={solid('share-alt')} />
            <FontAwesomeIcon
              className={classes.facebook}
              icon={brands('facebook')}
            />
            <FontAwesomeIcon
              className={classes.twitter}
              icon={brands('twitter')}
            />
            <FontAwesomeIcon
              className={classes.google}
              icon={brands('google-plus')}
            />
            <FontAwesomeIcon
              className={classes.linkedin}
              icon={brands('linkedin')}
            />
          </div>
          <div className={classes.relatedTags}>
            <FontAwesomeIcon className={classes.tagicon} icon={solid('tags')} />
            <a href="/home">LG</a>
            <a href="/home">Android</a>
            <a href="/home">Mobile</a>
            <a href="/home">Laptop</a>
          </div>
        </footer>
      </div>
    </BlogLayout>
  );
};

export default SingleBlog;
