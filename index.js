 const mongoose = require('mongoose');

 const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/mydb");
     const productSchema = new mongoose.Schema({
         title: String,
         price: Number,
         desc: String
     });
     const ProductModel = mongoose.model('mydb', productSchema);
     let data = new ProductModel({title: 'apple', price: 443300, desc: 'it was new'});
     let result = await data.save();
     console.log(result);

 }
 main().then(r => {
     console.log('data insert')
 });