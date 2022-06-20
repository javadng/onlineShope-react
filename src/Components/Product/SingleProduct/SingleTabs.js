import { useReducer } from 'react';
import classes from './SingleTabs.module.scss';

const initalStateReduc = {
  showDesc: true,
  showInfo: false,
  showReview: false,
};

const isActiveClass = state => {
  return state ? classes.spanAnimated : '';
};

const reducer = (state, action) => {
  if (action.type === 'DESC') {
    return initalStateReduc;
  }

  if (action.type === 'INFO') {
    return {
      showDesc: false,
      showInfo: true,
      showReview: false,
    };
  }

  if (action.type === 'REVIEW') {
    return {
      showDesc: false,
      showInfo: false,
      showReview: true,
    };
  }

  return initalStateReduc;
};

const SingleTabs = props => {
  const containerClasses = `${props.className} ${classes.tabs}`;

  const [navTabState, navTabDispatch] = useReducer(reducer, initalStateReduc);

  return (
    <section className={containerClasses}>
      <header className={classes.tabHeader}>
        <span
          onClick={() => navTabDispatch({ type: 'DESC' })}
          className={`${classes.tabLink} ${isActiveClass(
            navTabState.showDesc
          )}`}
        >
          Description
        </span>
        <span
          onClick={() => navTabDispatch({ type: 'INFO' })}
          className={`${classes.tabLink} ${isActiveClass(
            navTabState.showInfo
          )}`}
        >
          Additional Information
        </span>
        <span
          onClick={() => navTabDispatch({ type: 'REVIEW' })}
          className={`${classes.tabLink} ${isActiveClass(
            navTabState.showReview
          )}`}
        >
          Review (1)
        </span>
      </header>
      <div className={classes.textHolder}>
        {navTabState.showDesc && (
          <p className={classes.desc}>
            Desc Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            iusto molestiae harum esse accusantium eius inventore aperiam quidem
            provident earum odio porro aut ducimus, nam maxime reprehenderit
            necessitatibus quas numquam.
          </p>
        )}
        {navTabState.showInfo && (
          <p className={classes.info}>
            info Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            iusto molestiae harum esse accusantium eius inventore aperiam quidem
            provident earum odio porro aut ducimus, nam maxime reprehenderit
            necessitatibus quas numquam.
          </p>
        )}
        {navTabState.showReview && (
          <p className={classes.review}>
            Review Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nisi iusto molestiae harum esse accusantium eius inventore aperiam
            quidem provident earum odio porro aut ducimus, nam maxime
            reprehenderit necessitatibus quas numquam.
          </p>
        )}
      </div>
    </section>
  );
};

export default SingleTabs;
