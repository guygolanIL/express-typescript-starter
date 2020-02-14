import express from 'express';

export default class Application {

    private app: express.Application = express();

    public start(port: number, onStart: () => void) {
        this.app.listen(port, onStart);
    }
}