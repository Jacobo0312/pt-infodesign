var mysql = require('mysql2');

//Configuración
var mysqlConn = mysql.createConnection({
    host: 'mysql-db',
    database: 'pruebainfodesign',
    user: 'pt-root',
    password: 'juan2002'
});

//Conexión
mysqlConn.connect( (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Conexión a DB MYSQL exitosa');
    }
});

//Exportación
module.exports = mysqlConn;