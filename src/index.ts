import Application from './server/Application';

const port = 4000;
const app = new Application();

app.start(port, () => {
    console.log(`Server started at port ${port}`);
});
