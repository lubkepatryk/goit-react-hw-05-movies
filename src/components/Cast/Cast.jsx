import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { CastStyled } from './Cast.styled';

import { getCast } from '../../API';
import Poster from '../Poster';

function Cast() {
  const { id } = useParams();
  const [casts, setCasts] = useState(null);
  useEffect(() => {
    getCast(id)?.then(setCasts);
  }, [id]);

  return (
    { casts } && (
      <CastStyled>
        <ul>
          {casts?.length === 0 ? (
            <p>We don't have any casts for this movies</p>
          ) : (
            casts?.map(({ profile_path, name, character, cast_id }) => (
              <li className="thumb-cast" key={cast_id}>
                <p>{name || 'none'}</p>
                <Poster width={100} url={profile_path} alt={name}></Poster>
                
                <p>Character: {character || 'none'}</p>
              </li>
            ))
          )}
        </ul>
      </CastStyled>
    )
  );
}

Cast.propTypes = {
  width: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
};

export default Cast;