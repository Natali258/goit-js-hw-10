import { fetchBreeds, fetchCatByBreed } from '../src/cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const ref = {
  select: document.querySelector('select.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

const sel = new SlimSelect({
  select: '.breed-select',
});

ref.loader.classList.replace('loader', 'is-hidden');
ref.error.classList.add('is-hidden');
ref.catInfo.classList.add('is-hidden');

// ===============================COLLECTION-BREEDS=====================================

const getCat = fetchBreeds()
  .then(value => {
    let option = [];
    value.forEach(el => {
      option.push({ text: el.name, value: el.id });
    });
    sel.setData(option);
  })
  .catch(error => {
    ref.error.classList.remove('is-hidden');
  });

// ===============================INFORMATION-ABOUT-CAT==================================
const getCatsInfo = e => {
  ref.loader.innerHTML = '';
  ref.loader.classList.replace('is-hidden', 'loader');
  ref.error.classList.add('is-hidden');

  const breedId = e.currentTarget.value;

  fetchCatByBreed(breedId)
    .then(res => {
      ref.loader.classList.replace('loader', 'is-hidden');
      ref.catInfo.classList.remove('is-hidden');
      ref.catInfo.innerHTML = `<div class="cat-info">
      <img src="${res[0].url}" alt="${res[0].breeds[0].name}" width="400" />
      <p class="descr">${res[0].breeds[0].description}</p>
      <p class="temperament">Temperament: ${res[0].breeds[0].temperament}</p>
    </div>`;
    })
    .catch(error => {
      ref.error.classList.remove('is-hidden');
    });
};
ref.select.addEventListener('change', getCatsInfo);

// ===============================ERROR-HANDLING=========================================
