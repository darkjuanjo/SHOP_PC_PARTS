const faker = require('faker');

const db = require('../config/connection');
const { User, Inventory } = require('../models');

db.once('open', async () => {
  await Inventory.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 10; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  await User.collection.insertMany(userData);

  // create Items
  let CreatedItems = [
    {
      name: 'Apple Watch Series 7',
      cost: '$200',
      category: 'watch',
      description: 'Electronic Apple Watch',
      stock: '200'
    },
    {
      name: 'SteelSeries Arctis 7P',
      cost: '$50',
      category: 'Headset',
      description: 'Wireless Headset',
      stock: '100'
    },
    {
      name: 'Samsung Neo QLED 8K Series',
      cost: '$1000',
      category: 'TV',
      description: '8K High Definition TV',
      stock: '80'
    },

  ]
  await Inventory.collection.insertMany(CreatedItems);

  console.log('all done!');
  process.exit(0);
});
