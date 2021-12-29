
const app = require('./app');

const server = app.listen(app.get('port'),()=> {
  console.log(`Server on port: http://localhost:${server.address().port}`);
})