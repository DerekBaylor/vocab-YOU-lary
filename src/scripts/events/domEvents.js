import addVocabForm from '../components/forms/addVocabFrom';
import showVocab from '../components/vocab';
import CreateTimeStamp from '../helpers/data/createtTimeStamp';
import {
  createVocab,
  updateVocab,
  deleteVocab,
  getSingleVocab,
} from '../helpers/data/vocabData';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure?')) {
        const [, id] = e.target.id.split('--');

        deleteVocab(id, uid).then(showVocab);
      }
    }

    if (e.target.id.includes('submit-vocab')) {
      e.preventDefault();
      const vocabObj = {
        vocab_word: document.querySelector('#wordForm').value,
        vocab_def: document.querySelector('#definitionForm').value,
        langTech: document.querySelector('#langTechForm').value,
        uid,
        timeStamp: CreateTimeStamp(),
      };

      createVocab(vocabObj).then((vocabArray) => showVocab(vocabArray));
    }
    if (e.target.id.includes('edit-vocab')) {
      const [, id] = e.target.id.split('--');

      getSingleVocab(id).then((vocabObj) => addVocabForm(uid, vocabObj));
    }

    if (e.target.id.includes('update-vocab')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      const vocabObject = {
        vocab_word: document.querySelector('#wordForm').value,
        vocab_def: document.querySelector('#definitionForm').value,
        langTech: document.querySelector('#langTechForm').value,
        firebaseKey,
        uid,
      };

      updateVocab(vocabObject).then(showVocab);
    }
  });
};

export default domEvents;
