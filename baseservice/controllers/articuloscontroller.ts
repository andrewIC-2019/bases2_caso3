import { articulos_data } from '../repositories/data_articulos'
import { Logger } from '../common'


export class ArticulosController {
    private static instance: ArticulosController;
    private log: Logger;

    private constructor()
    {
        this.log = new Logger();
        try {
        } catch (e) { this.log.error(e); }
    }

    //patron Singelton
    public static getInstance() : ArticulosController
    {
        if (!this.instance)
        {
            this.instance = new ArticulosController();
        }
        return this.instance;
    }

    public listArticulos() : Promise<any> 
    {
        const mongo = new articulos_data();
        return mongo.getAllArticulos();
    }

    public addArticulo(data : JSON) : Promise<any> 
    {
        const mongo = new articulos_data();
        return mongo.addArticulo(data);
    }

    public close(user : string, auctionTitle : string, reasonType : String) : Promise<any> 
    {
        const mongo = new articulos_data();
        return mongo.close(user, auctionTitle, reasonType);
    }
    
}