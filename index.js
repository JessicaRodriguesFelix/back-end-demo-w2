const bcrypt = require('bcrypt');
const { sequelize } = require('./db');
const { User } = require('./models');

const SALT_COUNT = 10;

const run = async () => {
  try {

    /* *************** SETUP *************** */
    await sequelize.sync({force: true});
    const userJohn = {username: 'johnDoe', password: 'test123'};
    const userJohn2 = {username: 'johnDoe2', password: 'test123'};

    console.log("Let's start hashing some passwords!");

    /* *************** START DEMO *************** */
    
    
  } catch (error) {
    console.error(error)
  } finally {
    sequelize.close();
  }
}


run();
