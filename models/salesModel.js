import mongoose , {Schema, models} from 'mongoose';

const salesSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
    },
    code: String,
    amount: Number,
    orderId: String,
    paymentId: String,
    username: String,
    useremail: String,
    incentive: Number,
    dateTaken: {
        type: Date,
        default: Date.now,
    },
    
})

const Sale =  models.Sales || mongoose.model('Sales', salesSchema);

export default Sale;