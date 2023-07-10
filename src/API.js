import axios from 'axios';

const BASE = 'https://api.themoviedb.org/3/';
const KEY = '?api_key=13ad78b66804523865aeb0ffdb1d8c9f';
const LANG = '&language=en-US';

export async function getTrends() {
  const response = await axios(BASE + 'trending/all/day' + KEY);
  return response.data.results;
}

export async function getDetails(id) {
  const response = await axios(BASE + 'movie/' + id + KEY + LANG);
  return response.data;
}

export async function getCast(id) {
  const response = await axios(BASE + 'movie/' + id + '/credits' + KEY + LANG);
  return response.data.cast;
}

export async function getReview(id) {
  const response = await axios(BASE + 'movie/' + id + '/reviews' + KEY + LANG);
  return response.data.results;
}

export async function getMovies(q) {
  const response = await axios(
    BASE +
      'search/movie' +
      KEY +
      LANG +
      '/&query=' +
      q +
      '&page=1&include_adult=false'
  );

  return response.data.results;
}