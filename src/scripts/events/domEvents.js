import addVocabForm from '../components/forms/addVocabFrom';
import { showVocab } from '../components/vocab';
import {
  createVocab,
  updateVocab,
  deleteVocab,
  getSingleVocab,
} from '../helpers/data/vocabData';
import viewVocab from '../views/viewVocab';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // Click Event for deleting vocab cards.
    if (e.target.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure?')) {
        const [, id] = e.target.id.split('--');

        deleteVocab(id, uid).then(showVocab);
      }
    }

    // Click Event for Submitting a new Vocab Word
    if (e.target.id.includes('submit-vocab')) {
      e.preventDefault();
      const vocabObj = {
        vocab_word: document.querySelector('#wordForm').value,
        vocab_def: document.querySelector('#definitionFrom').value,
        langTech: document.querySelector('#langTechForm').value,
        uid
      };

      createVocab(vocabObj).then((vocabArray) => showVocab(vocabArray));
    }
    // Click Event for Updating Vocab Words
    if (e.target.id.includes('edit-vocab')) {
      const [, id] = e.target.id.split('--');

      getSingleVocab(id).then((vocabObj) => addVocabForm(uid, vocabObj));
    }

    // Click Event for Updating a V
    if (e.target.id.includes('update-vocab')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const vocabObject = {
        vocab_word: document.querySelector('#wordForm').value,
        vocab_def: document.querySelector('#definitionFrom').value,
        langTech: document.querySelector('#langTechForm').value,
        firebaseKey,
        uid
      };

      updateVocab(vocabObject).then(showVocab);
    }

    // ADD CLICK EVENT TO VIEW BOOK DETAILS
    if (e.target.id.includes('view-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      viewVocab(firebaseKey).then(viewVocab);
    }
  }); // Master Closing Braket
};

export default domEvents;
