import classes from './Pagination.module.scss';
import Button from '../UI/Button';
import { useEffect, useReducer } from 'react';

import arrayCreator from '../../helpers/arrayCreatror';
import postsSlicer from '../../helpers/postslicer';
const initialState = {
  currentPage: 1,
  postPerPage: 3,
};

const reducerFunction = (state, action) => {
  if (action.type === 'NEXT_PAGE') {
    return {
      currentPage: state.currentPage + 1,
      postPerPage: state.postPerPage,
    };
  }

  if (action.type === 'PREV_PAGE') {
    return {
      currentPage: state.currentPage - 1,
      postPerPage: state.postPerPage,
    };
  }

  if (action.type === 'CHANGE_NUM') {
    return {
      currentPage: action.pageNum,
      postPerPage: state.postPerPage,
    };
  }

  return initialState;
};

const Pagination = props => {
  const PaginationClasses = `${classes.pageBtns} ${props.className || ''}`;
  const btnClassNames = `${classes.btn}`;
  let pageBtns;

  const [pagesStates, dispatchPages] = useReducer(
    reducerFunction,
    initialState
  );

  const { allPosts, setPostsState } = props;

  const allPages = Math.ceil(allPosts.length / pagesStates.postPerPage);

  const goToNextPage = () => {
    dispatchPages({ type: 'NEXT_PAGE' });
  };

  const goToPrevPage = () => {
    dispatchPages({ type: 'PREV_PAGE' });
  };

  const changePage = e => {
    const pageNum = +e.target.textContent;

    if (pageNum > allPages) return;

    dispatchPages({ type: 'CHANGE_NUM', pageNum });
  };

  useEffect(() => {
    const postsArray = postsSlicer(
      allPosts,
      pagesStates.currentPage,
      pagesStates.postPerPage
    );

    setPostsState(postsArray);
  }, [
    pagesStates.currentPage,
    pagesStates.postPerPage,
    allPosts,
    setPostsState,
  ]);

  // const getPaginationgroup = () => {
  //   const limitPagination = allPages >= pageLimit ? pageLimit : allPages;
  //   return range(currPage, limitPagination);
  // };

  /* last page =>  */
  if (pagesStates.currentPage === allPages) {
    pageBtns = arrayCreator(1, pagesStates.currentPage - 1).map(
      (item, index) => {
        return (
          <Button key={index} onClick={changePage} className={btnClassNames}>
            {item}
          </Button>
        );
      }
    );
  }

  /* fist page  */
  if (pagesStates.currentPage === 1) {
    pageBtns = arrayCreator(pagesStates.currentPage + 1, allPages).map(
      (item, index) => {
        return (
          <Button key={index} onClick={changePage} className={btnClassNames}>
            {item}
          </Button>
        );
      }
    );
  } else {
    pageBtns = arrayCreator(1, allPages).map((item, index) => {
      return (
        <Button key={index} onClick={changePage} className={btnClassNames}>
          {item}
        </Button>
      );
    });
  }

  return (
    <div className={PaginationClasses}>
      {pagesStates.currentPage !== 1 && (
        <Button onClick={goToPrevPage} className={btnClassNames}>
          &larr;
        </Button>
      )}
      {pageBtns}
      <Button className={`${classes.btn} ${classes.btnInfo}`}>
        {pagesStates.currentPage} of {allPages}
      </Button>
      {pagesStates.currentPage !== allPages && (
        <Button onClick={goToNextPage} className={btnClassNames}>
          &rarr;
        </Button>
      )}
    </div>
  );
};

export default Pagination;
