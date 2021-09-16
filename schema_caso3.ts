
/*
================================
Bases 2 - Caso #3
Estudiantes:
    Andrés Arias Siles
    Pamela Dinarte Chavarria
Desing Schema para: 
    
    Prototipo de un sistema para subastar artículos usados
Justificación: 
================================
*/

//Se llama a mongoose desde nodejs
const mongoose = require('mongoose');

//Schema model de Sistema de Subastas
const articles = new mongoose.Schema( 
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
});

// Hacemos el modelo, utilizando el schema
const as_articles = mongoose.model('as_articles', articles);

/*
Examples of catalogs
articleCategory:
[Real estate, Vehicles, Electronics, Jewelery and watches, 
Clothes and shoes, Furniture, crockery]
*/

/*
Ejemplos:

{
    title: "Jeans jacket",
    name: "Levis' jacket 506",
    description: "An well-perserved levis' jacket buy in USA. Size M/L",
    manufacteredYear: 2015,
    photos: ["www.img.com"],
    posttime: "2021-09-16T04:32:57+02:00",
    endDate: "2021-10-16T23:59:59+02:00",
    articleState: "very good",
    articleCategory: "clothes and shoes",
    isActive: true,
    inicialPrice: 8.0,
    currency: "USD",
    reserve: 0,
    currentMaxBid: 9.5,
    maxBidUserInfo: {
                        username: "john_miles",
                        profilePhoto: "www.img.com",
                        email: "jhmiles_u@caso3auction.com"
                    },
    sellerInfo: {
                    username : "enjoy_live7819",
                    profilePhoto : "www.img.com",
                    email : "c.ramirez.esquivel@caso3auction.com"
                },
    closeInfo: {
                    Reason: null,
                    Posttime: null
                },
    bids_log:   [
                {
                    posttime : "2021-09-19T01:55:21+02:00",
                    bidAmount : 9.5,
                    currency : "USD",
                    username: "john_miles",
                    profilePhoto: "www.img.com",
                    email: "jhmiles_u@caso3auction.com"
                }
                {
                    posttime : "2021-09-18T02:13:51+02:00",
                    bidAmount : 8.5,
                    currency : "USD",
                    username : "slink_jK",
                    profilePhoto : "www.img.com",
                    email : "jk.slink@caso3auction.com"
                },
                {
                    posttime : "2021-09-17T10:32:12+02:00",
                    bidAmount : 8.0,
                    currency : "USD",
                    username : "gabo_guz21",
                    profilePhoto : "www.img.com",
                    email : "gguzman.contact@caso3auction.com"
                }
                ]
}

{

    title: "For sale a magnificient asiatic tableware",
    name: "Chinese tableware",
    description: "High-luxury chinese tableware, used only once in a diplomatic event before pandemic",
    manufacteredYear: 2019,
    photos: ["www.img.com"],
    posttime: "2021-09-15T12:58:12-06:00",
    endDate: "2021-09-21T23:59:59-06:00",
    articleState: "excellent",
    articleCategory: "crockery",
    isActive: true,
    inicialPrice: 22.5,
    currency: "USD",
    reserve: 30.0,
    currentMaxBid: 25.5,
    maxBidUserInfo: {
                        username: "2smart_tx",
                        profilePhoto: "www.img.com",
                        email: "Francis_uo@caso3auction.com"
                    },
    sellerInfo: {
                    username: "Yolanda de Villanueva",
                    profilePhoto: "www.img.com",
                    email: "yms_villa@caso3auction.com"
                },
    closeInfo: {
                    Reason: null,
                    Posttime: null
                },
    bids_log:   [
                {
                    posttime : "2021-09-16T08:52:24-06:00",
                    bidAmount : 25.5,
                    currency : "USD",
                    username : "2smart_tx",
                    profilePhoto : "www.img.com",
                    email : "Francis_uo@caso3auction.com"
                }
                ]
}

{
    title: "The watch by definition",
    name: "casio f91",
    description: "Atemporal watch, 100% functional",
    manufacteredYear: 2020,
    photos: ["www.img.com"],
    posttime: "2021-09-14T20:41:18-02:00",
    endDate: "2021-09-28T23:59:59-02:00",
    articleState: "excellent",
    articleCategory: "jewelery and watches",
    isActive: true,
    inicialPrice: 1.0,
    currency: "USD",
    reserve: 0,
    currentMaxBid: 2.0,
    maxBidUserInfo: {
                        username: "ronny_world02",
                        profilePhoto: "www.img.com",
                        email: "rhic.cr33@caso3auction.com"
                    },
    sellerInfo: {
                    username: "Marilyn-Wright",
                    profilePhoto: "www.img.com",
                    email: "mary_w@caso3auction.com"
                },
    closeInfo: {
                    Reason: null,
                    Posttime: null
                },
    bids_log:   [
                {
                    posttime : "2021-09-17T10:18:05-02:00",
                    bidAmount : 2.0,
                    currency : "USD",
                    username : "ronny_world02",
                    profilePhoto : "www.img.com",
                    email : "rhic.cr33@caso3auction.com"
                }
                ]
}

{
    title: "Old Fashioned Radio",
    name: "Phillips wood radio",
    description: "Portable radio that was vey popular in the post-war era",
    manufacteredYear: 1947,
    photos: ["www.img.com"],
    posttime: "2021-09-11T13:12:15-06:00",
    endDate: "2021-09-30T23:59:59-06:00",
    articleState: "good",
    articleCategory: "electronics",
    isActive: true,
    inicialPrice: 15.0,
    currency: "USD",
    reserve: 0,
    currentMaxBid: 19.5,
    maxBidUserInfo: {
                        username: "Tobías_Dittel",
                        profilePhoto: "www.img.com",
                        email: "Tobías_Dittel@caso3auction.com"
                    },
    sellerInfo: {
                    username: "Mayela_Ortiz",
                    profilePhoto: "www.img.com",
                    email: "Mayela Ortiz@caso3auction.com"
                },
    closeInfo: {
                    Reason: null,
                    Posttime: null
                },
    bids_log:   [
                {
                    posttime : "2021-09-14T01:12:26-06:00",
                    bidAmount : 19.5,
                    currency : "USD",
                    username : "Tobías_Dittel",
                    profilePhoto : "www.img.com",
                    email: "Tobías_Dittel@caso3auction.com"
                },
                {
                    posttime : "2021-09-13T15:41:07-06:00",
                    bidAmount : 18.1,
                    currency : "USD",
                    username : "tom_lowell",
                    profilePhoto : "www.img.com",
                    email : "lowell_tommy24@caso3auction.com"
                },
                {
                    posttime : "2021-09-12T23:59:59-06:00"
                    12-09-2021 08:52:58, 
                    bidAmount : 15.1,
                    currency : "USD",
                    username : "free_runner47",
                    profilePhoto : "www.img.com",
                    email : "karen_cespedes@caso3auction.com"
                }
                ]
}

{
    title: "A tv color!",
    name: "Hitachi series 16",
    description: "One of the firsts color tv sold in CR",
    manufacteredYear: 1972,
    photos: ["www.img.com"],
    posttime: "2021-09-11T09:09:13-00:00"
    endDate: "2021-09-30T23:59:59-00:00"
    articleState: "excellent",
    articleCategory: "electronics",
    isActive: true,
    inicialPrice: 120.0,
    currency: "USD",
    reserve: 150.0,
    currentMaxBid: null,
    maxBidUserInfo: {
                        username: null,
                        profilePhoto: null,
                        email: null
                    },
    sellerInfo: {
                    username: "Rodolfo_Garita53",
                    profilePhoto: "www.img.com",
                    email: "rodolfo_garita53@caso3auction.com"
                },
    closeInfo: {
                    Reason: null,
                    Posttime: null
                },
    bids_log:   [
                ]
}

{
    title: "Original Mustang",
    name: "Ford Mustang fastback",
    description: "An original fastback that has been sitting per 10 years, no rust",
    manufacteredYear: 1967,
    photos: ["www.img.com"],
    posttime: "2021-09-10T15:31:43-06:00",
    endDate: "2021-10-10T23:59:59-06:00",
    articleState: "regular",
    articleCategory: "vehicles",
    isActive: false,
    inicialPrice: 1000.0,
    currency: "USD",
    reserve: 0,
    currentMaxBid: 4000.0,
    maxBidUserInfo: {
                        username: "Angie_Fonseca",
                        profilePhoto: "www.img.com",
                        email: "angiefs28@caso3auction.com"
                    },
    sellerInfo: {
                    username: "Alberto_Madrigal",
                    profilePhoto: "www.img.com",
                    email: "amadrigal_cr1821@caso3auction.com"
                },
    closeInfo: {
                    Reason: "Sold",
                    Posttime: "2021-09-15T22:11:05-06:00"
                },
    bids_log:   [
                {
                    posttime : "2021-09-15T22:11:05-06:00", 
                    bidAmount : 4000.0,
                    currency : "USD",
                    username : "Angie_Fonseca",
                    profilePhoto : "www.img.com",
                    email : "angiefs28@caso3auction.com"
                },
                {
                    posttime : "2021-09-15T21:42:20-06:00", 
                    bidAmount : 3500.0,
                    currency : "USD",
                    username : "Frank_Alfarodriguez",
                    profilePhoto : "www.img.com",
                    email: "frank_arodriguez@caso3auction.com"
                },
                {
                    posttime : "2021-09-13T12:07:09-06:00", 
                    bidAmount : 2800.0,
                    currency : "USD",
                    username : "enjoy_live7819",
                    profilePhoto : "www.img.com",
                    email : "c.ramirez.esquivel@caso3auction.com"
                },
                {
                    posttime : "2021-09-12T13:12:45-06:00", 
                    bidAmount : 1200.0,
                    currency : "USD",
                    username : "horacioD_lopezJ",
                    profilePhoto : "www.img.com",
                    email : "hdiaz_company@caso3auction.com"
                }
                
                ]
}

{
    title: "2021 new collection shoes",
    name: "nike air & smile",
    description: "Used only one time, super clean, 8 unisex. Invoice in hand",
    manufacteredYear: 2021,
    photos: ["www.img.com"],
    posttime: "2021-09-09T16:38:43-00:00",
    endDate: "2021-09-14T23:59:59-00:00",
    articleState: "excellent",
    articleCategory: "clothes and shoes",
    isActive: false,
    inicialPrice: 10.0,
    currency: "USD",
    reserve: 15.0,
    currentMaxBid: 25.0,
    maxBidUserInfo: {
                        username: "ordinary_person57",
                        profilePhoto: "www.img.com",
                        email: "marcial_op4@caso3auction.com"
                    },
    sellerInfo: {
                    username: "HB_Tony5",
                    profilePhoto: "www.img.com",
                    email: "ant_novarov@caso3auction.com"
                },
    closeInfo: {
                    Reason: "Time_Expired",
                    Posttime: "2021-09-13T23:59:59-00:00"
                },
    bids_log:   [
                {
                    posttime : "2021-09-13T01:12:26-00:00", 
                    bidAmount : 25.0,
                    currency : "USD",
                    username : "ordinary_person57",
                    profilePhoto : "www.img.com",
                    email : "jmarcial_op4@caso3auction.com"
                }
                ]
}
*/