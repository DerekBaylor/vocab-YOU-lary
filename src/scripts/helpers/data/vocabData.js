import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET Vocab
const getVocab = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getVocab;
