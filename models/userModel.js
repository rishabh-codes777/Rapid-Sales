import mongoose , {Schema, models} from 'mongoose';
const userSchema = new Schema({
    name: String,
    image: {
        type: String,
        default: "https://relationshipplus.s3.ap-south-1.amazonaws.com/man_7122917.png"
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        default: "Hey there! I am sprintearn user"
    },
    website: String,
    mobile: String,
    password: String,
    orderId: String,
    paymentId: String,
    currentDay: {
        type: Number,
        default: 1
    },
    currentWeek: {
        type: Number,
        default: 1
    },
    isPremium: {
        type: Boolean,
        default: false
    },
    isInfluencer: {
        type: Boolean,
        default: false
    },
})

const Users =  models.AllUser || mongoose.model('AllUser', userSchema);

export default Users;