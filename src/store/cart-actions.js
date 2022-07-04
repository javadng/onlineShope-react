import { API_URL } from '../config';
import { productActions } from './products-slice';
import { uiActions } from './ui-slice';

export const getProducts = () => {
  return async dispatch => {
    dispatch(
      uiActions.showNotification({
        status: 'LOADING',
        title: 'isLoading...',
        message: 'data is loading',
      })
    );

    const fetchData = async () => {
      const response = await fetch(`${API_URL}/products.json`);

      if (!response.ok)
        throw new Error(`Somthing went wrong. ${response.statusText}`);

      const dataFetch = await response.json();

      let data = [];

      for (const item in dataFetch) {
        data.push({
          id: item,
          name: dataFetch[item].name,
          price: dataFetch[item].price,
          description: dataFetch[item].description,
          imgUrl: dataFetch[item].image_url,
        });
      }

      return data;
    };

    try {
      const data = await fetchData();
      dispatch(productActions.replaceItems(data));

      dispatch(
        uiActions.showNotification({
          status: 'SUCCESS',
          title: 'success',
          message: 'data is recieved',
        })
      );
    } catch (err) {
      // console.log(err.message);
      dispatch(
        uiActions.showNotification({
          status: 'ERROR',
          title: 'Error',
          message: err.message,
        })
      );
    }
  };
};
