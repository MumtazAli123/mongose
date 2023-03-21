const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb');
const productSchema = new mongoose.Schema({
  name: String,
  title: String,
  price: Number,
  brand: String,
  category: String

});

const saveInDB = async () => {
  const Product = mongoose.model('mydbs', productSchema);
  let data = new Product({
    name: 'nolia  611',
    title: "max 100",
    price: 400,
    brand: 'nokia',
    category: 'Mobile'
  });
  const result = await data.save();
  console.log(result);
}
// saveInDB();

const updateInDB =async  () => {
  const Product = mongoose.model('mydbs', productSchema);
  let data =await  Product.updateOne(
      { name: "iPhone x max" },
      {
        $set: { price: 3450, name: 'nokia' }
      }
  )
  console.log(data)
}
updateInDB();

// const deleteInDB = async ()=>{
//   const Product = mongoose.model('mydbs', productSchema);
//   let data = await Product.deleteOne({name:'max 100'})
//   console.log(data);
// }
// const findInDB = async ()=>{
//   const Product = mongoose.model('mydbs', productSchema);
//   let data = await Product.find({name:'max pro 611'})
//   console.log(data);
// }

