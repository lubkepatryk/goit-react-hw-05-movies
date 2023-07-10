import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ListMovies from '../components/ListMovies/ListMovies';
import { getTrends } from '../API';

function Home() {
  const [trendes, setTrendes] = useState(null);

  useEffect(() => {
    getTrends().then(setTrendes);
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ListMovies list={trendes} />
    </>
  );
}

Home.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
export default Home;