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
    reserve: Number,                            // Lowest price that the article can be sell, is not always the inicialPrice
    currentMaxBid: Number,
    maxBidUserInfo: {username: String, profilePhoto: String, email: String},
    sellerInfo: {username: String, profilePhoto: String, email: String},
    closeInfo: {Reason: String, Posttime: Date},//E.x. User_close, Time_expired
    bids_log : [{posttime : Date, bidAmount : Number, currency : String, username : String, profilePhoto : String, email : String}]
});

//Transaction para agregar artículo

//Dar de baja un articulo por vencimiento o por el vendedor YO

//Ofertar


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
    title: "Old Fashioned Radio",
    name: "Phillips wood radio",
    description: "Portable radio that was vey popular in the post-war era",
    manufacteredYear: 1947,
    photos: ["www.img.com"],
    posttime: 11-09-2021,
    endDate: 15-09-2021,
    articleState: "Good",
    articleCategory: "Electronics",
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
                }
}

{
    title: "A tv color!",
    name: "Hitachi series 16",
    description: "One of the firsts color tv sold in CR",
    manufacteredYear: 1972,
    photos: ["www.img.com"],
    posttime: 11-09-2021,
    endDate: null,
    articleState: "Excellent",
    articleCategory: "Electronics",
    isActive: true,
    inicialPrice: 120.0,
    currency: "USD",
    reserve: 0,
    currentMaxBid: null,
    maxBidUserInfo: {
                        username: null,
                        profilePhoto: null,
                        email: null
                    },
    sellerInfo: {
                    username: "Rodolfo_Garita53",
                    profilePhoto: "www.img.com",
                    email: "Rodolfo_Garita53@caso3auction.com"
                },
    closeInfo: {
                    Reason: null,
                    Posttime: null
                }
}

*/
