import React from 'react';
import './Wrapper.scss';
import Categories from '../Categories/Categories';
import Main from '../Main/Main';
import { Outlet } from 'react-router-dom';

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Categories />
      <Main />
      {/* <Outlet /> */}
    </div>
  );
};

export default Wrapper;
