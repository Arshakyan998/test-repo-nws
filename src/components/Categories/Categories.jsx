import React, { useEffect, useState } from 'react';
import './Categories.scss';
import { images } from '../../store';
import { getImagesData } from '../../store/images/getImages';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Categorie from '../Categorie/Categorie';

const Categories = () => {
  const dispatch = useAppDispatch();
  const changeId = images.actions.pageId;
  const initialPage = images.actions.initialPage;
  const categories = useAppSelector((state) => state.categories.categories);
  const currentCategoryName = useAppSelector((state) => state.categories.currentCategory);
  const [currentCategory, setCurrentCategory] = useState();

  const changeCurrentCategory = (id) => {
    setCurrentCategory(id), dispatch(changeId(id));
  };

  useEffect(() => {
    dispatch(initialPage());

    if (currentCategory) {
      dispatch(getImagesData({ id: currentCategory }));
    }
  }, [currentCategory]);

  return (
    <div className="categories">
      <ul className="categories__list">
        {categories.map((el) => {
          return (
            <Categorie
              styledCategorie={'categories__listItem'}
              key={el.id}
              {...el}
              changeCurrent={changeCurrentCategory}
            />
          );
        })}
      </ul>
      <h1 className="categories__headText">{`${currentCategoryName} Cats`}</h1>
    </div>
  );
};

export default Categories;
