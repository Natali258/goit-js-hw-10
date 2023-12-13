function createOption(value) {
  let option = value.map(el => {
    return `<option value="${el.id}">${el.name}</option>`;
  });

  return option;
}
function catInfo(res) {
  return `<div class="cat-info">
      <img src="${res[0].url}" alt="${res[0].breeds[0].name}" width="400" />
      <p class="descr">${res[0].breeds[0].description}</p>
      <p class="temperament">Temperament: ${res[0].breeds[0].temperament}</p>
    </div>`;
}

export { createOption, catInfo };
