import clearDom from '../../helpers/data/clearDom';

const addVocabForm = (uid, item = {}) => {
  clearDom();

  document.querySelector('#form-container').innerHTML = `
  <form id="vocab-form" class="mb-4">
    <div class="form-group">
        <label for="word">Vocab Word</label>
        <input type="text" class="form-control" id="wordForm" aria-describedby="vocabWord" placeholder="Enter Vocab Word" value="${item.vocab_word || ''}" required>
    </div>
    <div class="form-group">
        <label for="langTech">Language/Tech</label>
        <textarea class="form-control" placeholder="Language or Tech" id="langTechForm" style="height: 100px">${item.langTech || ''}</textarea>
    </div>
    <div class="form-group">
        <label for="definition">Definiton</label>
        <textarea class="form-control" placeholder="Vocab Definiton" id="definitionForm" style="height: 100px">${item.vocab_def || ''}</textarea>
    </div>
        <button type="submit" 
        id="${item.firebaseKey ? `update-vocab--${item.firebaseKey}` : 'submit-vocab'}" class="btn btn-primary submit-btn">Submit Vocab
        </button>
  </form>`;
};

export default addVocabForm;
