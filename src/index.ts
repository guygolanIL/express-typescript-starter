import express, {Application} from 'express';
import bodyParser from 'body-parser';

const port = 4000;
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
