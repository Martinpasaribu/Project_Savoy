import mongoose from 'mongoose';


interface ILead extends Document{
    name: string,
    email: string,
    contact: number,
    message: string,
}

const LeadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact: { type: Number, required: true },
    message: { type: String, required: true },

    isDeleted: {
        type: Boolean,
        default: false  
    },
},
    {
        timestamps: true,
    }
);

const  LeadModel = mongoose.model<ILead>('Lead', LeadSchema,'Lead');

export default LeadModel;
