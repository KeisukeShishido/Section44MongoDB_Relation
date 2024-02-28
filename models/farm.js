const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDemo',
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log('MongoDBコネクションOK');
    })
    .catch(err => {
        console.log('MongoDBコネクションエラー');
        console.log(err);
    })

const productSchema = new Schema({
    name:String,
    price: Number,
    season: {
        type: String,
        enum: ['spring','summer','fall','winter']
    }
});

const Product = mongoose.model('Product',productSchema);

// Product.insertMany([
//     {name: 'メロン',price: 498,season: 'summer'},
//     {name: 'スイカ',price: 498,season: 'summer'},
//     {name: 'アスパラガス',price: 298,season: 'spring'}
// ]);

const farmSchema = new Schema({
    name: String,
    city: String,
    products:
})