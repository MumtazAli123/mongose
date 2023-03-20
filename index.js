 const mongoose = require('mongoose');

 const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/mydb");
     const productSchema = new mongoose.Schema({
         title: String,
         price: Number
     });
     const ProductModel = mongoose.model('mydb', productSchema);
     let data = new ProductModel({title: 'red3', price: 3992});
     let result = await data.save();
     console.log(result);

 }
 main().then(r => {
     console.log('data insert')
 });