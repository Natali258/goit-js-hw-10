const api_key =
  'live_gAL7JxmbjUU6gxkKBGgnlTuJEB3afNUZML5GYiRMmv5TP64TOpSgjuODdnlX0S1n';

const BASE_URL = 'https://api.thecatapi.com';
const END_POINT = '/v1/breeds';
const url = `${BASE_URL}${END_POINT}?api_key=${api_key}`;
const END_PNT = '/v1/images/search';

function fetchBreeds() {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}${END_PNT}?api_key=${api_key}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
export { fetchBreeds, fetchCatByBreed };