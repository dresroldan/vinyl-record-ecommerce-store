import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/data.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/userModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

// Seeder file used to add products to mongo database 

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log('data imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    a;
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await User.insertMany(users);

    console.log('data destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
