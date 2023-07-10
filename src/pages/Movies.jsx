import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListMovies from '../components/ListMovies/ListMovies';
import { getMovies } from '../API';

const Movies = () => {
  const [movies, setMovies] = useState(null);

  const [query, setQuery] = useSearchParams();

  useEffect(() => {
    const strQuery = query.get('query');
    if (strQuery) getMovies(strQuery).then(setMovies);
    if (!strQuery) {
      setMovies(null);
      setQuery({});
    }
  }, [query, setQuery]);

  function onSearch(e) {
    e.preventDefault();
    setQuery({
      query: e.currentTarget.elements.q.value,
    });
    e.currentTarget.reset();
  }
 
  return (
    <form onSubmit={onSearch}>
      <label>
        <input name="q" type="text" />
      </label>
      <button type="submit">Search</button>
      {movies?.length > 0 && (
        <>
          <ListMovies list={movies} />
        </>
      )}
    </form>
  );
};

Movies.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};

export default Movies;