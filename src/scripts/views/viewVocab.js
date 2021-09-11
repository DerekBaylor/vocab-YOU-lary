import { getSingleVocab } from '../helpers/data/vocabData';
import showVocab from '../components/vocab';

const viewVocab = (FirebaseKey) => new Promise((resolve, reject) => {
  getSingleVocab(FirebaseKey)
    // .then((response) => resolve(Object.values(response.data)))
    .then(showVocab)
    .catch((error) => reject(error));
});

export default viewVocab;
