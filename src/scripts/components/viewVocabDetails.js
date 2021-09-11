import clearDom from '../helpers/data/clearDom';

const viewVocabDetails = (item) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
  <div class="card vd-card">
  <div class="card-body">
    <h5 class="vd-card-title">${item.vocab_word}</h5>
    <p class="vd-langOrTech">${item.langTech}</p>
    <hr>
    <p class="vd-card-def">${item.vocab_def}</p>
    <hr>
    <i class="btn btn-success fas fa-eye" id="view-vocab-btn--${item.firebaseKey}"></i>
    <i id="edit-vocab-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
    <i id="delete-vocab--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>
</div>`;
};

export default viewVocabDetails;
