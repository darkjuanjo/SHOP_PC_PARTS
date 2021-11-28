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
      description: 'Motherboard',
      name: 'MSI Z490 PRO',
      price: 249.80,
      category: 'Motherboards',
      stock: 20,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6436/6436464_sd.jpg'
    },
    {
      description: 'CPU',
      name: 'Intel-i9 9900k',
      price: 499.99,
      category: 'CPUs',
      stock: 20,
      image: 'https://www.bhphotovideo.com/images/images1500x1500/intel_bx80684i99900kf_boxed_intel_core_i9_9900kf_1455409.jpg',
    },
    {
      description: 'RAM',
      name: 'Corsair(8x2 GB) Vengeance',
      price: 98.99,
      category: 'RAM',
      stock: 20,
      image: 'https://static.techspot.com/images2/downloads/topdownload/2014/12/ram.png',
    },
    {
      description: 'Cooling System',
      name: 'NZXT X63 Kraken',
      price: 189.99,
      category: 'Cooling',
      stock: 20,
      image: 'https://images.mmorpg.com/images/heroes/posts/120076.jpg',
    },
    {
      description: 'GPU',
      name: 'GEFORCE RTX 3080',
      price: 829.81,
      category: 'VideoCards',
      stock: 20,
      image: 'https://m.media-amazon.com/images/I/81pvDYeb+qL._AC_SY450_.jpg',
    },
    {
      description: 'Power Supply',
      name: 'Seasonic Focus 850W',
      price: 141.19,
      category: 'PowerSupplies',
      stock: 20,
      image: 'https://m.media-amazon.com/images/I/718Xf34YhtL._AC_SX450_.jpg',
    },
    {
      description: 'SSD',
      name: 'Samsung EVOPlus M.2(1TB)',
      price: 139.99,
      category: 'HardDrives',
      stock: 20,
      image: 'https://www.pcgamesn.com/wp-content/uploads/2019/01/Samsung-970-EVO-Plus-review-HD.jpg',
    },
    {
      description: 'Case',
      name: 'NZXT H700 mid-tower',
      price: 152.75,
      category: 'Cases',
      stock: 20,
      image: 'https://cdn.mos.cms.futurecdn.net/ddDsbbETpQj5sBhWw2zoB.jpg',
    },
    {
      description: 'Fans',
      name: 'Corsair LL120 White RGB 120mm',
      price: 24.80,
      category: 'Fans',
      stock: 20,
      image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6351/6351843cv11d.jpg',
    },
    {

      description: 'HDD',
      name: 'Seagate Desktop HDD(1TB)',
      price: 29.99,
      category: 'HardDrives',
      stock: 20,
      image: 'https://c1.neweggimages.com/ProductImage/22-148-840-08.jpg',
    },
    {

      description: 'Cables',
      name: 'CableMod PRO',
      price: 98.03,
      category: 'Cables',
      stock: 20,
      image: 'https://cdn.cablemod.com/wp-content/uploads/2018/02/CM-PCAB-BKIT-NKW-3PW-R-1-1000x1000.jpg',
    },
    {

      description: 'WIFI Card',
      name: 'Elgato HD60 Pro',
      price: 179.99,
      category: 'WIFI',
      stock: 20,
      image: 'https://m.media-amazon.com/images/I/61NcypBj+wL._AC_SY450_.jpg',
    }
  ]
  await Inventory.collection.insertMany(CreatedItems);

  console.log('all done!');
  process.exit(0);
});
