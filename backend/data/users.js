import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'adminn@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Dre Day',
    email: 'dre@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Dave Navarro',
    email: 'dave@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
 