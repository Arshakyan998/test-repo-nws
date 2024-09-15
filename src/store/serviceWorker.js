import axios from 'axios';
const CATEGORIES_URL = 'https://api.thecatapi.com/v1/categories';
const IMAGES_URL = 'https://api.thecatapi.com/v1/images';

const mainUrl = axios.create({
  baseURL: IMAGES_URL,
});

const serviceWorker = () => {
  const getCategories = async () => {
    const response = await axios.get(CATEGORIES_URL);
    const data = await response.data;
    return data;
  };
  const getImages = async (page = 1, id) => {
    const response = await mainUrl.get(`search?limit=10&page=${page}&category_ids=${id}`);
    const data = await response.data;
    return data;
  };

  return { getCategories, getImages };
};

export default serviceWorker;
