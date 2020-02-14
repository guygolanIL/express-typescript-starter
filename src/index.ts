import Server from './server/Server';
import schedule from 'node-schedule';
const port = 4000;
const server = new Server();

const fetchDataRule = '* */5 * * * *';
const job = schedule.scheduleJob('Fetch data', fetchDataRule, () => {
    console.log('fetching data');
});

server.start(port, () => {
    console.log(`Server started at port ${port}`);
    job.invoke();
});
