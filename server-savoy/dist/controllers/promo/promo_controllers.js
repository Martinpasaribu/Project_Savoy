"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromoControllers = void 0;
const uuid_1 = require("uuid");
const promo_models_1 = __importDefault(require("../../models/promo_models"));
const mongoose_1 = __importDefault(require("mongoose"));
const { ObjectId } = mongoose_1.default.Types;
class PromoControllers {
    static AddPromo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const PromoReq = req.body;
            // const body = JSON.parse(req.body.list); // 💥 Tambahkan ini
            // const PromoReq = body.list;
            try {
                const newPromo = new promo_models_1.default(PromoReq);
                const savedPromo = yield newPromo.save();
                res.status(201).json({
                    requestId: (0, uuid_1.v4)(),
                    data: {
                        acknowledged: true,
                        insertedId: savedPromo._id
                    },
                    message: "Successfully Add Promo.",
                    success: true
                });
            }
            catch (error) {
                res.status(400).json({
                    requestId: (0, uuid_1.v4)(),
                    data: null,
                    message: error.message,
                    success: false
                });
            }
        });
    }
    static GetPromo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const promo = yield promo_models_1.default.find({ isDeleted: false });
                res.status(200).json({
                    requestId: (0, uuid_1.v4)(),
                    data: promo,
                    success: true
                });
            }
            catch (error) {
                console.log(error);
                // Kirim hasil response
                return res.status(400).json({
                    requestId: (0, uuid_1.v4)(),
                    data: null,
                    message: error.message || "Internal Server Error",
                    success: false
                });
            }
        });
    }
    static DeletedPromo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                // ✅ Validasi jika id tidak ada
                if (!id) {
                    return res.status(400).json({
                        requestId: (0, uuid_1.v4)(),
                        data: null,
                        message: "id Promo is required!",
                        success: false
                    });
                }
                // ✅ Cari promo berdasarkan id
                const Promo = yield promo_models_1.default.findOneAndUpdate({ _id: new ObjectId(id), isDeleted: false }, { isDeleted: true }, { new: true } // Mengembalikan data yang diperbarui
                );
                if (!Promo) {
                    return res.status(404).json({
                        requestId: (0, uuid_1.v4)(),
                        data: null,
                        message: "Promo not found!",
                        success: true
                    });
                }
                res.status(200).json({
                    requestId: (0, uuid_1.v4)(),
                    data: Promo,
                    message: `Promo ${Promo.title} has deleted!`,
                    success: true
                });
            }
            catch (error) {
                console.log(error);
                // Kirim hasil response
                return res.status(400).json({
                    requestId: (0, uuid_1.v4)(),
                    data: null,
                    message: error.message || "Internal Server Error",
                    success: false
                });
            }
        });
    }
}
exports.PromoControllers = PromoControllers;
