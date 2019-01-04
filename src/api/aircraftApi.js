import axios from 'axios';

const fetchRes = url =>
  new Promise((resolve, reject) => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(
        ({ data }) => {
          resolve(data);
        },
        (err) => {
          reject(err);
        },
      );
  });

export default fetchRes