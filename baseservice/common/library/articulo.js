const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articuloSchema = new Schema(
    {
        title: String,                              // title of the auction
        name: String,                               // name of the product
        description: String,
        manufacteredYear: Number,
        photos: [String],
        posttime: Date,
        endDate: Date,                              // Date when the auction will be left
        articleState: String,                       // Excelent, Very Good, Good, Regular, Bad
        articleCategory: String,
        isActive: Boolean,                          // Is the Auction running
        inicialPrice: Number,
        currency: String,
        reserve: Number,                            // Lowest price that the article can be sell,
                                                    // not always is the inicialPrice
        currentMaxBid: Number,
        maxBidUserInfo: {
                            username: String,
                            profilePhoto: String,
                            email: String
                        },
        sellerInfo: {
                        username: String,
                        profilePhoto: String,
                        email: String
                    },
        closeInfo: {
                        Reason: String,             //E.x. User_close, Time_expired
                        Posttime: Date              
                    },
        bids_log : [{
                        posttime : Date, 
                        bidAmount : Number,
                        currency : String,
                        username : String,
                        profilePhoto : String,
                        email : String
                    }]
    }
);

module.exports = Articulo = mongoose.model('Articulo', articuloSchema);
