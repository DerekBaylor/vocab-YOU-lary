import clearDom from '../helpers/data/clearDom';

const showVocab = (array) => {
  clearDom();

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
      <div class="card">
      
      <div class="card-body">
        <h5 class="card-title">${item.vocab_word}</h5>
        <p class="langOrTech">${item.langTech}</p>
        <hr>
        <p class="card-def">${item.vocab_def}</p>
        <hr>
        <i class="btn btn-success fas fa-eye" id="view-vocab-btn--${item.firebaseKey}"></i>
        <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-vocab--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
    </div>
  </div>`;
  });
};

const emptyVocab = () => {
  document.querySelector('#store').innerHTML = '<h1>No Vocabulary</h1>';
};

export { showVocab, emptyVocab };
