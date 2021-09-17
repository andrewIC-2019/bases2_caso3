import * as express from 'express';
import * as bodyParser from 'body-parser';
import Routes from './routes/routes'

/*
APLICACION DE SERVICIO
*/
class App {

    public express: express.Application;
    private saludos:string[];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    // Se agregan los middleware
    // deprecated porque ya lo hace nativo
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    //Abre una ruta a api
    //si no viene api, request invalido
    //luego de /api, se monta el archivo routes:
    //  articlesrouter, kindness, routes
    private routes(): void {
        this.express.use('/api', Routes);

        this.express.use('*', (req,res) => {
            res.send("Request invalido");
        });
    }
}

export default new App().express;