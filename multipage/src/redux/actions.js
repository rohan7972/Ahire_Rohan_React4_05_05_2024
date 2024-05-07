export const setItems = (items) => ({
    type: 'SET_ITEMS',
    payload: items,
  });
  
  export const fetchItems = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(setItems(data));
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
  };
  