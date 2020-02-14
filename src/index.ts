import Application from './server/Application';
import schedule from 'node-schedule';
const port = 4000;
const app = new Application();

const fetchDataRule = '* */5 * * * *';
const job = schedule.scheduleJob('Fetch data', fetchDataRule, () => {
    console.log('fetching data');
});

app.start(port, () => {
    console.log(`Server started at port ${port}`);
    job.invoke();
});
