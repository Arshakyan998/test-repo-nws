import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => {
  return useDispatch();
};

export const useAppSelector = (selector) => {
  return useSelector(selector);
};
