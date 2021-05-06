// import axios from 'axios';

// axios.post('http://localhost:3000/users', {
//   name: 'myname',
//   age: 20,
// });

import { User } from './models/User';

const user = new User({ id: 1 });

user.fetch();
