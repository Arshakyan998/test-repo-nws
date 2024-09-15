import React from 'react';
import './Categorie.scss';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { categories } from '../../store';

const Categorie = ({ id, name, changeCurrent, styledCategorie }) => {
  const dispatchCurrentCategory = categories.actions.setCurrentCategory;
  const dispatch = useAppDispatch();
  const changeCurrentCategory = () => {
    changeCurrent(id);
    dispatch(dispatchCurrentCategory(name));
  };
  return (
    <li className={styledCategorie}>
      <NavLink
        to={`/page/${id}`}
        onClick={changeCurrentCategory}
        className={({ isActive }) => (isActive ? 'categories__active' : '')}>
        {name}
      </NavLink>
    </li>
  );
};

export default Categorie;
