import { API_URL } from '../config';

export const getSingleProduct = async productId => {
  const response = await fetch(`${API_URL}/singlProducts.json`);

  if (!response.ok)
    throw new Error(`Somthing went wrong. ${response.statusText}`);

  let dataFetch = await response.json();
  // dataFetch = dataFetch[productId];
  // let data = [];

  // console.log(dataFetch[productId]);
  // for (const item in dataFetch) {
  //   // data.push({
  //   //   id: item,
  //   //   name: dataFetch[item].name,
  //   //   price: dataFetch[item].price,
  //   //   description: dataFetch[item].description,
  //   //   imgUrl: dataFetch[item].image_url,
  //   // });
  // }

  return dataFetch[productId];
};
