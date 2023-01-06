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
    const hashedPassword = await bcrypt.hash(userJohn.password, SALT_COUNT)
    const hashedPassword2 = await bcrypt.hash(userJohn2.password, SALT_COUNT)
    console.log(hashedPassword)
    console.log(hashedPassword2)

    const isAMatch = await bcrypt.compare(userJohn.password, hashedPassword)
    if (isAMatch) {
      console.log('passwords match!')
    } else {
      console.log('incorrect')
    }
   
    const hashedPasswordForUser = await bcrypt.hash(userJohn.password, SALT_COUNT)
    const safeUser = await User.create({
      username: userJohn.username,
      password: hashedPasswordForUser
    })

    
  } catch (error) {
    console.error(error)
  } finally {
    sequelize.close();
  }
}


run();
