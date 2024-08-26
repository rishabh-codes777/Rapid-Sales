import mongoose , {Schema, models} from 'mongoose';
const freeUserSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    
    mobile: String,
})

const FreeUsers =  models.FreeUser || mongoose.model('FreeUser', freeUserSchema);

export default FreeUsers;