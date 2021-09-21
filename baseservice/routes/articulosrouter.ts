import * as express from 'express';
import { Logger } from '../common'
import { ArticulosController } from '../controllers/articuloscontroller'

const app = express();
const log = new Logger();

app.get("/listActive", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
   // next()
    ArticulosController.getInstance().listArticulos(1)
    .then((data)=>{
        console.log("Retrieved succesfully!");
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "Error!";
    });

});

app.get("/listAll", (req, res, next) => {
    ArticulosController.getInstance().listArticulos(0)
    .then((data)=>{
        console.log("Retrieved succesfully!");
        res.json(data);
    })
    .catch((err)=>{
        log.error(err);
        return "Error!";
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
        return "Error!";
    });
});

app.post("/closeTime", (req, res, next) => {
    ArticulosController.getInstance().close(req.body.username, req.body.title, "Time_expired")
    .then((data)=>{
        res.json({"Message": "Auction closed. Time expired!"});
    })
    .catch((err)=>{
        log.error(err);
        return "Error!";
    });
});

app.post("/closeOwner", (req, res, next) => {
    ArticulosController.getInstance().close(req.body.username, req.body.title, "User_close")
    .then((data)=>{
        res.json({"Message": "Auction closed. Owner closed it!"});
    })
    .catch((err)=>{
        log.error(err);
        return "Error!";
    });
});

app.post("/bid", (req, res, next) => {
    ArticulosController.getInstance().bid(req.body.title, req.body.amount, req.body.username,
                                          req.body.currency, req.body.profilePhoto, req.body.email)
    .then((data)=>{
        if(data != null){
            res.json({"Message": "Bid accepted!"});
        }
        else{
            res.json({"Message": "Bid denied!"});
        }
        
    })
    .catch((err)=>{
        log.error(err);
        res.json({"Message": "Error!"});
    });
});

export { app as articulosrouter };