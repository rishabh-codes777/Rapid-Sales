import mongoose , {Schema, models} from 'mongoose';



const productSchema = new Schema({
    name: String,
    description: String,
    paymentLink: String,
    price: Number,
    incentiveType: String,
    incentive: String,
})

const Product =  models.Products || mongoose.model('Products', productSchema);

export default Product;