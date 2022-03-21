const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    itemId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    threshold: {
        type: Number,
        required: true,
    },
    storage: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },

});

