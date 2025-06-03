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
const express_1 = __importDefault(require("express"));
const ImageKit_1 = require("../ImageKit");
const promo_controllers_1 = require("../../controllers/promo/promo_controllers");
const PromoRoutes = express_1.default.Router();
PromoRoutes.post("/create/promo", ImageKit_1.upload, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Hasil req by addRoom:', req.files);
    if (!req.files) {
        next(); // Jika tidak ada file, lanjutkan ke RoomController
    }
    // Ambil file yang diunggah
    const imageFile = req.files['image'] || [];
    const image_bg = req.files['image_bg'] || [];
    const image2_bg = req.files['image2_bg'] || [];
    // Cek apakah ada file yang diunggah
    if (imageFile.length === 0 && image_bg.length === 0 && image2_bg.length === 0) {
        console.log('Tidak ada file yang diunggah!');
        // return res.status(400).json({ message: "Harap unggah gambar." });
    }
    try {
        // Mengunggah gambar dan menunggu hasilnya
        const uploadedImageUrls = yield Promise.all(imageFile.map(ImageKit_1.uploadImage));
        const uploadedImage_bg = yield Promise.all(image_bg.map(ImageKit_1.uploadImage));
        const uploadedImage2_bg = yield Promise.all(image2_bg.map(ImageKit_1.uploadImage));
        // Masukkan URL gambar yang diunggah ke dalam req.body
        if (uploadedImage_bg.length > 0) {
            req.body.image_bg = uploadedImage_bg[0]; // Ambil URL poster pertama
        }
        if (uploadedImage2_bg.length > 0) {
            req.body.image2_bg = uploadedImage2_bg[0]; // Ambil URL poster pertama
        }
        if (uploadedImageUrls.length > 0) {
            req.body.image = uploadedImageUrls.map((url, index) => {
                var _a, _b;
                return ({
                    row: ((_b = (_a = req.body.image) === null || _a === void 0 ? void 0 : _a[index]) === null || _b === void 0 ? void 0 : _b.row) || "",
                    image: url || "",
                });
            });
        }
        // Lanjutkan ke controller addRoom
        next();
    }
    catch (error) {
        console.error("Error uploading images:", error);
        // return res.status(500).json({ error: "Gagal mengunggah gambar." });
    }
}), promo_controllers_1.PromoControllers.AddPromo);
PromoRoutes.get("/get/promo", promo_controllers_1.PromoControllers.GetPromo);
exports.default = PromoRoutes;
