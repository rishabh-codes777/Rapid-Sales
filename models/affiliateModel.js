import mongoose, { Schema, models } from 'mongoose';

const salesDetailsSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
    },
    quantity: Number,
    amount: Number
});

const referralDetailsSchema = new Schema({
    platform: String,
    audience: String,
    accountNo: Number,
    ifsc: String,
    accountHolder: String,
    accountType: String,
    description: String,
    aadhar: String,
});

const affiliateSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: String,
    code: { type: String, unique: true },
    salesDetails: [salesDetailsSchema],  // Changed to array to accommodate multiple sales
    referralDetails: referralDetailsSchema,
    totalIncome: Number,
    settledIncome: Number,
    dateTaken: {
        type: Date,
        default: Date.now,
    },
});

const Affiliate = models.Affiliates || mongoose.model('Affiliates', affiliateSchema);

export default Affiliate;
