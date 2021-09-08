import domBuilder from '../components/domBuilder';
import navBar from '../components/navbar';
// domEvents
// navEvents
import logoutButton from '../components/logoutButton';
// showVocab
// getVocab

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  console.warn('App is starting');
};

export default startApp;
