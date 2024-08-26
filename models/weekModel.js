import mongoose , {Schema, models} from 'mongoose';
const daysScehma = new Schema({
    day: Number,
    title: {
        type: String,
        required: true
    },
    details: String
    
})
const weekSchema = new Schema({
    week: Number,
    title: {
        type: String,
        required: true
    },
    description: String,
    color: String,
    bgcolor: String,
    days:[daysScehma]
})

const WeekDetails =  models.Weeks || mongoose.model('Weeks', weekSchema);

export default WeekDetails;