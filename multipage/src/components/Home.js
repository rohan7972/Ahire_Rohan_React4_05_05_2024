import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/actions';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const loading = useSelector((state) => state.items.loading);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <a href={`/item/${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
