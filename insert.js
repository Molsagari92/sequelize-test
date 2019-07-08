const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:linuxconfig.org@localhost/zeta_test');
let readline = require('readline-sync');

sequelize
  .authenticate()
  .then(() => {
    let name = readline.question('Give me the name of the game! ');
    let description = readline.question('Give me the decription of the choosen game! ');
    sequelize.query('insert into games (name, description) values ("' + name + '", "' + description + '");').then(result => {
      console.log(result);
    });
  }
  );
 .catch(err => {
    console.error('Unable to connect to the database:', err);
  }); 
