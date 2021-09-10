import { getSingleVocab } from '../helpers/data/vocabData';

const viewVocab = (FirebaseKey) => new Promise((resolve, reject) => {
  getSingleVocab(FirebaseKey)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default viewVocab;
