import { useCallback, useState } from 'react';

const useFilter = () => {
  const [filterdItems, setfilterdItems] = useState([]);

  const filterItemsHandler = useCallback(
    (allItems, filterPrice) => {
      setfilterdItems(allItems.filter(item => item.price <= filterPrice));
    },
    [setfilterdItems]
  );

  return [filterdItems, filterItemsHandler];
};

export default useFilter;
