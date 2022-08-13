import express, {Application, json} from 'express';
import { hello } from './hello';

const port = 4000;
const app: Application = express();

app.use(json());

app.listen(port, () => {
    console.log(hello);
    console.log(`Server started at port ${port}`);
});
