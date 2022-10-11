const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    product: {type:String, required:true},
    price: {type:String, required:true},
    coordinates: { 
        x: {type:String},
        y: {type:String}
    }
});

const userSchema = new Schema({
    name: {type:String, required:true},
    email: {type:email, required:true},
    password: {type:password, required:true},
    
});

const Products = mongoose.model('products', productSchema, 'products');
const Users = mongoose.model('products', productSchema, 'users');
const mySchemas = {'Products':Products, 'Users':Users};

module.exports = mySchemas;