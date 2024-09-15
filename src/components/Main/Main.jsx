import React, { useEffect } from 'react';
import './Main.scss';

import CatImage from '../CatImage/CatImage';
import { images } from '../../store';
import { getImagesData } from '../../store/images/getImages';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Loading from '../Loading/Loading';

const Main = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.images.data);
  const changeCurrentPage = images.actions.changeCurrentPage;

  const currentPageId = useAppSelector((state) => state.images.currentId);
  const currentPage = useAppSelector((state) => state.images.currentPage);

  const isLoading = useAppSelector((state) => state.images.isLoading);
  const error = useAppSelector((state) => state.images.error);
  const changeId = images.actions.pageId;

  const loadMore = () => {
    dispatch(changeCurrentPage());
    dispatch(getImagesData({ id: currentPageId, page: currentPage }));
  };

  useEffect(() => {
    dispatch(changeId(1));
    dispatch(getImagesData({ id: 1, page: currentPage }));
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <div className="main">
        <div className="main__images">
          {data &&
            data.map((el, i) => {
              return (
                <CatImage
                  styledImgWrapper="main__imageWrapper"
                  styledImg="main__image"
                  key={el.id + ' ' + i}
                  {...el}
                />
              );
            })}
        </div>
        <div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="main__loadBtnWrapper">
              <button className="main__loadBtn" onClick={loadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Main;
