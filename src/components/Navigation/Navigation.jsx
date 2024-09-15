import React from 'react';
import './Navigation.scss';
import { Routes, Route } from 'react-router-dom';
import Wrapper from '../Wrapper/Wrapper';
import { routes } from '../../assets/routes';
import Main from '../Main/Main';

const Navigation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper />} />
        <Route element={<Wrapper />} path={'/page/:id'} />;
      </Routes>
    </>
  );
};

export default Navigation;
