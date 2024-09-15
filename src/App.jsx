import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import { getCategoriesData } from './store/categories/getCategories';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import Navigation from './components/Navigation/Navigation';
function App() {
  const dispatch = useAppDispatch();
  const [toggleLoading, setToggleLoading] = useState(true);
  const isLoading = useAppSelector((state) => state.categories.isLoading);
  const error = useAppSelector((state) => state.categories.error);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategoriesData());
    navigate('/');
  }, []);
  console.log('App render');

  useEffect(() => {
    if (isLoading) {
      let time = setTimeout(() => {
        setToggleLoading(false);
      }, 1000);
    }
  }, [isLoading]);

  if (error) {
    return <h1>{error}</h1>;
  }
  return <>{toggleLoading ? <Loading /> : <Navigation />}</>;
}

export default App;
