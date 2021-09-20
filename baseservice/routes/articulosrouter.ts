import * as express from 'express';
import { Logger } from '../common'
import { ArticulosController } from '../controllers/articuloscontroller'

const app = express();
const log = new Logger();

app.get("/list", (req, res, next) => {
    ArticulosController.getInstance().listArticulos()
    .then((data)=>{
        console.log("Retrieved succesfully!");
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "";
    });

});

app.post("/add", (req, res, next) => {
    
    ArticulosController.getInstance().addArticulo(req.body)
    .then((data)=>{
        console.log("Inserted succesfully!");
        res.json({Message : "Inserted succesfully!"});
    })
    .catch((err)=>{
        log.error(err);
        return "";
    });
});

app.post("/closeTime", (req, res, next) => {
    ArticulosController.getInstance().close(req.body.username, req.body.title, "Time_expired")
    .then((data)=>{
        res.json({"Message": "Auction closed. Time expired!"});
    })
    .catch((err)=>{
        log.error(err);
        return "";
    });
});

app.post("/closeOwner", (req, res, next) => {
    ArticulosController.getInstance().close(req.body.username, req.body.title, "User_close")
    .then((data)=>{
        res.json({"Message": "Auction closed. Owner closed it!"});
    })
    .catch((err)=>{
        log.error(err);
        return "";
    });
});

export { app as articulosrouter };