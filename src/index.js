import { fetchBreeds, fetchCatByBreed } from '../src/cat-api';
import { createOption, catInfo } from '../src/create-markUp';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const ref = {
  select: document.querySelector('select.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

ref.loader.innerHTML = '';
ref.loader.classList.replace('is-hidden', 'loader');
ref.error.classList.add('is-hidden');
ref.catInfo.classList.add('is-hidden');

// ===============================COLLECTION-BREEDS=====================================

const getCat = fetchBreeds()
  .then(value => {
    option = createOption(value);
    ref.select.insertAdjacentHTML('beforeend', option);
    new SlimSelect({
      select: '.breed-select',
    });
  })
  .catch(error => {
    ref.error.classList.remove('is-hidden');
  })
  .finally(() => {
    ref.loader.classList.replace('loader', 'is-hidden');
  });

// ===============================INFORMATION-ABOUT-CAT==================================
const getCatsInfo = e => {
  ref.loader.innerHTML = '';
  ref.loader.classList.replace('is-hidden', 'loader');
  ref.error.classList.add('is-hidden');

  const breedId = e.currentTarget.value;

  fetchCatByBreed(breedId)
    .then(res => {
      ref.catInfo.classList.remove('is-hidden');
      ref.catInfo.innerHTML = catInfo(res);
    })
    .catch(error => {
      ref.error.classList.remove('is-hidden');
    })
    .finally(() => {
      ref.loader.classList.replace('loader', 'is-hidden');
    });
};
ref.select.addEventListener('change', getCatsInfo);

// ===============================ERROR-HANDLING=========================================
// console.log(1);
