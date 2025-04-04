const express = require('express');
const app = express();

app.set('view engine', 'ejs');
 
app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome', message: 'Hello from Node.js!' });
});

 
app.listen(3000, () => console.log('Server running on port 3000'));