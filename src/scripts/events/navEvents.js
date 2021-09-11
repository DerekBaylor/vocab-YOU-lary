import showVocab from '../components/vocab';
import { getVocab } from '../helpers/data/vocabData';
import addVocabForm from '../components/forms/addVocabFrom';

const navEvents = (uid) => {
  // Show All Vocab Per UID
  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab(uid).then(showVocab);
  });
  // Add Vocab Form Pop
  document.querySelector('#add-vocab').addEventListener('click', () => {
    addVocabForm(uid);
  });
};

export default navEvents;
