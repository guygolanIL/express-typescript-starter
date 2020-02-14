import express, {Application} from 'express';

export default class Server {

    private app: Application = express();

    public start(port: number, onStart: () => void) {
        this.app.listen(port, onStart);
    }
}