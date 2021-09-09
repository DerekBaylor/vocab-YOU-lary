import domBuilder from '../components/domBuilder';
import navBar from '../components/navbar';
// domEvents
// navEvents
import logoutButton from '../components/logoutButton';
import { showVocab } from '../components/vocab';
import getVocab from '../helpers/data/vocabData';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  getVocab(user.uid).then((vocabArray) => showVocab(vocabArray));
  console.warn('App is starting');
};

export default startApp;
