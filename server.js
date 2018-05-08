const app = require('./app');
const http = require('http');
const server = http.createServer(app);

server.listen(process.env.PORT || 3000)
server.on('listening',() => {
  console.log('Server listening on http://localhost:%d', server.address().port);
})
