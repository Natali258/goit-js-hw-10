import axios from 'axios';

const api_key =
  'live_gAL7JxmbjUU6gxkKBGgnlTuJEB3afNUZML5GYiRMmv5TP64TOpSgjuODdnlX0S1n';

axios.defaults.headers.common['x-api-key'] = api_key;

const BASE_URL = 'https://api.thecatapi.com';
const END_POINT = '/v1/breeds';
// const url = `${BASE_URL}${END_POINT}?api_key=${api_key}`;
const url = `${BASE_URL}${END_POINT}`;
const END_PNT = '/v1/images/search';

function fetchBreeds() {
  return axios(url);
  // return fetch(url).then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   return response.json();
  // });
}

function fetchCatByBreed(breedId) {
  return axios(`${BASE_URL}${END_PNT}?breed_ids=${breedId}`);
  // return fetch(
  //   // `${BASE_URL}${END_PNT}?api_key=${api_key}&breed_ids=${breedId}`
  //   `${BASE_URL}${END_PNT}?breed_ids=${breedId}`
  // ).then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   return response.json();
  // });
}
export { fetchBreeds, fetchCatByBreed };
