import clearDom from "../helpers/data/clearDom";

const viewVocabDetails = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">${obj.vocab_word}</h5>
    <p class="langOrTech">${obj.langTech}</p>
    <hr>
    <p class="card-def">${obj.vocab_def}</p>
    <hr>
    <i class="btn btn-success fas fa-eye" id="view-vocab-btn--${obj.firebaseKey}"></i>
    <i id="edit-vocab-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
    <i id="delete-vocab--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>
</div>`;
};

export default viewVocabDetails;
