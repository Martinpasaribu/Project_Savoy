
import ImageKit from 'imagekit';
import multer from "multer";
import dotenv from 'dotenv';



dotenv.config();



const imagekit = new ImageKit({
    publicKey: `${process.env.publicKey}`,
    privateKey: `${process.env.privateKey}`,
    urlEndpoint: `${process.env.urlEndpoint}`,
   
});


export const  uploadImage =  (file: Express.Multer.File): Promise<string> => {
    return new Promise((resolve, reject) => {
        
        try {
            const response = imagekit.upload({
                file: file.buffer,
                fileName: file.originalname,
                folder: 'dbSavoy',
            }, (error, result) => {
                if (error) {
                    reject(error); // Menolak promise jika ada error
                } else {
                    resolve(result?.url || ""); // Menggunakan optional chaining untuk menghindari null
                }
            });
            console.log('Image berhasil diupload:', response);
        } catch (error) {
            console.error('Error uploading file:', error);
        }

    });
};


const storage = multer.memoryStorage();

export const upload = multer({ 
    storage: storage,
    limits: { fileSize: 25 * 1024 * 1024 }, // Maksimal 25MB
}).fields([
    { name: "image", maxCount: 5 },
    { name: "image2", maxCount: 5 },
    { name: "image_bg", maxCount: 5 },
    { name: "image2_bg", maxCount: 5 },
]);

