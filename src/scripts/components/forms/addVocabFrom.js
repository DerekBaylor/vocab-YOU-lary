import clearDom from '../../helpers/data/clearDom';

const addVocabForm = (uid, vocabObj = {}) => {
  clearDom();

  document.querySelector('#formContainer').innerHTML = `
  <form id="vocab-form" class="mb-4">
    <div class="form-group">
        <label for="word">Vocab Word</label>
        <input type="text" class="form-control" id="wordForm" aria-describedby="vocabWord" placeholder="Enter Vocab Word" value="${vocabObj.vocab_word || ''}" required>
    </div>
    <div class="form-group">
        <label for="langTech">Language/Tech</label>
        <textarea class="form-control" placeholder="Language or Tech" id="langTechForm" style="height: 100px">${vocabObj.langTech || ''}</textarea>
    </div>
    <div class="form-group">
        <label for="definition">Definiton</label>
        <textarea class="form-control" placeholder="Vocab Definiton" id="langTechForm" style="height: 100px">${vocabObj.definition || ''}</textarea>
    </div>
        <button type="submit" 
        id="${vocabObj.firebaseKey ? `update-vocab--${vocabObj.firebaseKey}` : 'submit-vocab'}" class="btn btn-primary">Submit Vocab
        </button>
</form>`;
};

export default addVocabForm;
