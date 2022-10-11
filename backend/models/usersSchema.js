const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {type:String, required:true},
    email: {type:email, required:true},
    password: {type:password, required:true},
    
});

const UsersSchema = mongoose.model('products', productSchema, 'users');
module.exports = UsersSchema;