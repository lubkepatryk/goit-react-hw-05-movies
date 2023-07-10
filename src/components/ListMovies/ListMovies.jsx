import { Link, useLocation } from 'react-router-dom';
import { Ul } from './ListMovies.styled';

function ListMovies({ list }) {
  const location = useLocation();
  return (
    <Ul>
      {list &&
        list.map(({ title, name, id }) => (
          <li key={id}>
            <Link to={'/movies/' + id} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        ))}
    </Ul>
  );
}

export default ListMovies;