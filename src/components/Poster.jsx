import search from '../search.jpeg';
const BASE_POSTER = 'https://image.tmdb.org/t/p/w500';

function Poster({ url, alt, width }) {
  return (
    <img width={width} src={url ? BASE_POSTER + url : search} alt={alt} />
  );
}
export default Poster;