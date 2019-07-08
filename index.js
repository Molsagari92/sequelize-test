const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://root:linuxconfig.org@localhost/zeta_test');
const table = require('table');

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
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
 
