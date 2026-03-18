const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
/*     image: {
        type: String,
        default:"https://tse1.mm.bing.net/th/id/OIP.EigNFQVUvHhefPkxucYlfAHaEo?pid=Api&P=0&h=180",
        set:(v)=>
            v ===""
        ? "https://tse1.mm.bing.net/th/id/OIP.EigNFQVUvHhefPkxucYlfAHaEo?pid=Api&P=0&h=180" : v,
    }, */

    image: {
    filename: {
        type: String,
        default: "listingimage"
    },
    url: {
        type: String,
        default: "https://tse1.mm.bing.net/th/id/OIP.EigNFQVUvHhefPkxucYlfAHaEo?pid=Api&P=0&h=180"
    }
},

    price: Number,
    location:String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports=Listing;