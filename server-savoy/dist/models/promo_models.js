"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PromoSchema = new mongoose_1.default.Schema({
    title: { type: String, required: false },
    title2: { type: String, required: false },
    sub_title: { type: String, required: false },
    sub_title2: { type: String, required: false },
    discount: { type: String, required: false },
    discount2: { type: String, required: false },
    after_discount: { type: String, required: false },
    after_discount2: { type: String, required: false },
    list: [{
            row: { type: Number },
            head: { type: String },
            paragraph: { type: String },
            value: { type: String }
        }],
    list2: [{
            row: { type: Number },
            head: { type: String },
            paragraph: { type: String },
            value: { type: String }
        }],
    desc: { type: String, required: false },
    desc2: { type: String, required: false },
    image: [{
            row: { type: Number },
            image: { type: String }
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
}, {
    timestamps: true,
});
const PromoModel = mongoose_1.default.model('Promo', PromoSchema, 'Promo');
exports.default = PromoModel;
