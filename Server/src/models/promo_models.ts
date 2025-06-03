import mongoose from 'mongoose';

interface List {
    head: string,
    paragraph: string,
    value: number
}

interface List2 {
    head: string,
    paragraph: string,
    value: number
}

interface Image {
    row: number,
    image: string
}

interface IPromo extends Document{

    title: string,
    title2: string,

    sub_title: string,
    sub_title2: string,

    discount: string,
    discount2: string,

    after_discount: string,
    after_discount2: string,

    list: List[],
    list2: List2[],

    desc: string,
    desc2: string,

    image: Image []
    image2: string
    image3: string
    image_bg: string
    image2_bg: string
    image3_bg: string


}

const PromoSchema = new mongoose.Schema(
    
    {

        title: { type: String, required: false },
        title2: { type: String, required: false },

        sub_title: { type: String, required: false },
        sub_title2: { type: String, required: false },

        discount: { type: String, required: false },
        discount2: { type: String, required: false },

        after_discount: { type: String, required: false },
        after_discount2: { type: String, required: false },

        list: { 
                type: [], 
                required: false 
              },

        list2: { 
                type: [], 
                required: false 
            },

        desc: { type: String, required: false },
        desc2: { type: String, required: false },

        image: [{
            row: {type: Number},
            image: {type: String}
        }],
        
        image2: { type: String, required: false },
        image3: { type: String, required: false },

        image_bg: { type: String, required: false },
        image2_bg: { type: String, required: false },
        image3_bg: { type: String, required: false },

        isDeleted: {
            type: Boolean,
            default: false  
        },
    },

    {
        timestamps: true,
    }
);

const  PromoModel = mongoose.model<IPromo>('Promo', PromoSchema,'Promo');

export default PromoModel;
