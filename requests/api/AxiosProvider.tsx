import axios from 'axios';
import { BASE_URL } from '~/constants/Connection';

axios.get(`${BASE_URL}/api/users/1`).then((response) => {
  console.log(response.data);
});


