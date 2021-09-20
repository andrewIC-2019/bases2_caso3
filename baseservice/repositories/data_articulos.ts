import { Logger } from '../common'
const Articulo = require('../common/library/articulo')

export class articulos_data {
    private log: Logger;

    public constructor() { }

    public getAllArticulos() : Promise<any>
    {
        return Articulo.find();
    }

    public addArticulo(data : JSON) : Promise<any>
    {
        return Articulo.create(data);
    }

    public close(user : string, auctionTitle : string, reasonType : String) : Promise<any>
    {
        return Articulo.updateOne({ title : auctionTitle}, 
                                  { isActive : false, closeInfo: {Reason: reasonType, Posttime: (new Date()).toString()}});
    }

}