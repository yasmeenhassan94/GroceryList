/***************************
 * Mongoose setup 
*****************************/

const mongoose = require('mongoose')
//include database name
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
.then( ()=>{
    console.log("CONNECTION OPEN!!!")
})
.catch(err=> {
    console.log("oh no error!!")
    console.log(err)
})

/***************************
 * Create schema 
*****************************/


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 20//built in schema constraints we can use 

    },
    price: {
    type: Number
    },
    onSale:{
        type:Boolean,
        default : false
    },
    categories:  [String],

    qty: {
        online:{
            type: Number,
            default:0
        },
        inStore:{
            type: Number,
            default:0
        }
    },
    size:{
        type:String,
        enum: ['S','M','L']
    }

});
/***************************
 * Custome Instance Method Model 
*****************************/
// creating our own schema must always go before model creation
productSchema.methods.greet = function () {
    console.log("HELLLO!!! HI!! HOWDY!!! ")
    console.log(`- from ${this.name}`)
}
productSchema.methods.toggleOnSale = function (){
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods. addCategory = function (newCat){
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function (){
    return this.updateMany({},{onSale: true, price:0})
}

/***************************
 * Create Model after Schema
*****************************/
//name must be singular and first letter capita;, mongoose will create collection for us with plural adding s
const Product = mongoose.model('Product', productSchema)




const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    await foundProduct.greet();
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}

// findProduct();

Product.fireSale().then(res => console.log(res))
/***************************
 * Create Instance 
*****************************/
// we can now make instances of our movie class
const bike = new Product({ name: "Mountain Bike",price :350.99, categories:['Cycling', 'Earth-Friendly']})

bike.save()
    .then(data =>{
        console.log("it workedddd!!")
        console.log(data)
    })
    .catch(err =>{
        console.log("Systems Crasssshin")
        console.log(err.errors.name.properties.message)
    })
