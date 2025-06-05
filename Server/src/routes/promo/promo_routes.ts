import express, { Request, Response, NextFunction } from "express";
import { upload, uploadImage } from "../ImageKit";
import { PromoControllers } from "../../controllers/promo/promo_controllers";

const PromoRoutes: express.Router = express.Router();


PromoRoutes.post("/create/promo", upload, async (req: Request, res: Response, next: NextFunction) => {
    
    console.log('Hasil req by addRoom:', req.files); 
    
    if (!req.files) {
         next(); // Jika tidak ada file, lanjutkan ke RoomController
    }

    // Ambil file yang diunggah
    const imageFile = (req.files as { [key: string]: Express.Multer.File[] })['image'] || [];
    const image_bg = (req.files as { [key: string]: Express.Multer.File[] })['image_bg'] || [];
    const image2_bg = (req.files as { [key: string]: Express.Multer.File[] })['image2_bg'] || [];

    // Cek apakah ada file yang diunggah
    if (imageFile.length === 0 && image_bg.length === 0 && image2_bg.length === 0) {
        console.log('Tidak ada file yang diunggah!');
        // return res.status(400).json({ message: "Harap unggah gambar." });
    }

    try {
        // Mengunggah gambar dan menunggu hasilnya
        const uploadedImageUrls = await Promise.all(imageFile.map(uploadImage));
        const uploadedImage_bg = await Promise.all(image_bg.map(uploadImage));
        const uploadedImage2_bg = await Promise.all(image2_bg.map(uploadImage));

        // Masukkan URL gambar yang diunggah ke dalam req.body
        if (uploadedImage_bg.length > 0) {
            req.body.image_bg = uploadedImage_bg[0]; // Ambil URL poster pertama
        }
        if (uploadedImage2_bg.length > 0) {
            req.body.image2_bg = uploadedImage2_bg[0]; // Ambil URL poster pertama
        }

        if (uploadedImageUrls.length > 0) {
            req.body.image = uploadedImageUrls.map((url, index) => ({
                row: req.body.image?.[index]?.row || "",
                image: url || "",
            }));
        }

        // Lanjutkan ke controller addRoom
        next();

    } catch (error) {
        console.error("Error uploading images:", error); 
        // return res.status(500).json({ error: "Gagal mengunggah gambar." });
    }

}, PromoControllers.AddPromo);

PromoRoutes.get("/get/promo", PromoControllers.GetPromo);

export default PromoRoutes;
