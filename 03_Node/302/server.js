console.log('server.js');

const http = require('http');
const app = require('./backend/app');

// Configure port-number
const dev_port_num = 3e3;
const default_host_port = process.env.PORT;
const port = dev_port_num || default_host_port;
app.set('port', port);
const server = http.createServer(app);


server.listen(port, () => { console.log('http://localhost:3000'); });