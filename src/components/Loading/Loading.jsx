import React from 'react';
import './Loading.scss';
import loading from './images/gears-spinner.svg';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__imgWrapper">
        <img className="loading__img" src={loading} alt="" />
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
