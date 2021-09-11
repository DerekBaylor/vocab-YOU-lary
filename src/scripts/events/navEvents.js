import showVocab from '../components/vocab';
import { filterVocabLang, filterVocabTech, getVocab } from '../helpers/data/vocabData';
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
  // Filter Language Vocab
  document.querySelector('#lang-vocab').addEventListener('click', () => {
    filterVocabLang(uid).then(showVocab);
  });
  document.querySelector('#tech-vocab').addEventListener('click', () => {
    filterVocabTech(uid).then(showVocab);
  });
};

export default navEvents;
