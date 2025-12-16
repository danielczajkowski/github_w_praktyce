import { useLocation } from 'react-router-dom';

export const usePageType = () => {
  const location = useLocation();
  const pageTypes = ['twitters', 'articles', 'notes'];
  const [, currentPage] = location.pathname.split('/');

  if (pageTypes.includes(currentPage)) {
    return currentPage;
  }
  return 'notes';
};
