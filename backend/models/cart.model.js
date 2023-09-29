
const express = require('express')

const mongoose = require('mongoose')

const cartSchma = mongoose.Schema({
    title:{type:String,required:true},
    img1:{type:String,required:true},
    categories:{type:String,required:true},
    brand:{type:String},
    price:{type:Number,required:true},
    discount:{type:Number,required:true},
    rating:{type:Number,required:true},
    description:{type:String},
    user:{type:String,required:true},
    product_quantity:{type:Number},
    quantity:{type:Number}
})


const cartModel = mongoose.model('cart',cartSchma)

module.exports = {cartModel}