console.log('Hello Dude!');

const http = require('http');

const server = http.createServer((req, res) => {

    res.end('This is my first response');
});

const dev_port_num = 3e3;
const default_host_port = process.env.PORT;
server.listen(dev_port_num || default_host_port, () => { console.log('http://localhost:3000'); });