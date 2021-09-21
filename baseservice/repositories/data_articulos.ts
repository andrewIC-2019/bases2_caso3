import { Error, Promise } from 'mongoose';
import { Logger } from '../common'
const Articulo = require('../common/library/articulo')

export class articulos_data {
    private log: Logger;

    public constructor() { }

    public getAllArticulos(tipo : Number) : Promise<any>
    {
        if(tipo == 0){
            return Articulo.find();
        }
        else{
            return Articulo.find({isActive : true});
        }
        
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

    public bid(auctionTitle : String, bidAmount : Number, bidder : String, bidCurrency : String, 
               bidderPhoto : String, bidderEmail : String) : Promise<any> 
    { 
        var newMaxInfo = {
            username : bidder,
            profilePhoto: bidderPhoto,
            email: bidderEmail
        }

        var bid = { 
            posttime : (new Date()).toString(), 
            bidAmount : bidAmount,
            currency : bidCurrency,
            username : bidder,
            profilePhoto : bidderPhoto,
            email : bidderEmail 
        }

        return Articulo.findOneAndUpdate({ title: auctionTitle, isActive : true, currentMaxBid : {$lt : bidAmount} }, 
            { currentMaxBid : bidAmount,  maxBidUserInfo : newMaxInfo, $push: { bids_log: bid }} );
    }


}