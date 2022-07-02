import Button from '../../UI/Button';
import classes from './BlogItem.module.scss';

const BlogItem = props => {
  const btnClasses = `${classes.blog__btn} btn`;

  return (
    <div className={classes.blog}>
      <figure className={classes.figureImg}>
        <img src={props.image} alt="blog" />
        <div className={classes['meta--time']}>
          <span className={classes.date}>
            <em>{props.date}</em>
          </span>
          <span className={classes.year}>{props.year}</span>
        </div>
      </figure>
      <header>
        <h2 className={classes.title}>
          <span>{props.title}</span>
        </h2>
      </header>
      <article>
        <p>{props.desc}</p>
      </article>
      <footer>
        <Button className={btnClasses}>READ more</Button>
      </footer>
    </div>
  );
};

export default BlogItem;
