const mysql = require('mysql2');
require('dotenv').config(); // Assurez-vous que dotenv est initialisé

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

const connection = mysql.createConnection(dbConfig);

connection.connect(error => {
  if (error) {
    console.error('Erreur de connexion à la base de données:', error);
    return;
  }
  console.log("Connexion réussie à la base de données MySQL !");
});

module.exports = connection;
