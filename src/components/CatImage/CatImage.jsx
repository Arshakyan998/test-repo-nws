import React from 'react';
import './CatImage.scss';

const CatImage = ({ url, id, styledImgWrapper, styledImg }) => {
  return (
    <>
      <div className={styledImgWrapper}>
        <img className={styledImg} src={url} alt={id} loading="lazy" />
      </div>
    </>
  );
};

export default CatImage;
