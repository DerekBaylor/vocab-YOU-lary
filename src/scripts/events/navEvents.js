import { showVocab } from '../components/vocab';
import { getVocab } from '../helpers/data/vocabData';
import addVocabForm from '../components/forms/addVocabFrom';

const navEvents = (uid) => {
  // Show All Vocab
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(uid).then(showVocab);
  });
  document.querySelector('#add-vocab').addEventListener('click', () => {
    addVocabForm(uid);
  });
};

export default navEvents;
