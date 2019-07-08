const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:linuxconfig.org@localhost/zeta_test');
let readline = require('readline-sync');
let table = require('table');

let a = readline.question('Do you want to add (a) or check (ch)? ');

if (a === 'a') {
  sequelize
    .authenticate()
    .then(() => {
      let name = readline.question('Give me the name of the game! ');
      let description = readline.question('Give me the decription of the choosen game! ');
      sequelize.query('insert into games (name, description) values ("' + name + '", "' + description + '");').then(result => {
      });
    }
    );
  /*  .catch(err => {
      console.error('Unable to connect to the database:', err);
    });  */
}

sequelize
  .authenticate()
  .then(() => {
    sequelize.query('select * from games').then(result => {
      const rows = result[0];
      const matrix = [];
      for (let i = 0; i < rows.length; i++) {
        matrix[i] = [
          rows[i].id,
          rows[i].name,
          rows[i].description
        ];
      }
      console.log(table.table(matrix));
    });
  });
/* .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

 */
