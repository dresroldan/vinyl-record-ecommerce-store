import bcrypt from 'bcryptjs';

const users = [
  {
    
    username: 'adminn@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
   
    username: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
   
    username: 'dre@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    
    username: 'dave@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
 