import Server from './server/Server';

const port = 4000;
const server = new Server();
server.start(port, () => {
    console.log(`Server started at port ${port}`);
});
