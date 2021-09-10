import domBuilder from '../components/domBuilder';
import navBar from '../components/navbar';
// domEvents
import navEvents from '../events/navEvents';
import logoutButton from '../components/buttons/logoutButton';
import { showVocab } from '../components/vocab';
import { getVocab } from '../helpers/data/vocabData';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  getVocab(user.uid).then((vocabArray) => showVocab(vocabArray));
  console.warn('App is starting');
  navEvents();
};

export default startApp;
