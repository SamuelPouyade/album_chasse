const app = require('./app');

// Définissez un port
const port = process.env.PORT || 3000;

// Le serveur écoute sur le port défini
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
