
import { v4 as uuidv4 } from 'uuid'; 
import { Request, Response, NextFunction  } from 'express';
import LeadModel from '../../models/lead_models';
import PromoModel from '../../models/promo_models';
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

export class PromoControllers {

        static async AddPromo(req: Request, res: Response) {

            const PromoReq = req.body;
            
            try {
                
                const newPromo = new PromoModel(PromoReq);
                const savedPromo = await newPromo.save();

                res.status(201).json(
                    {
                        requestId: uuidv4(), 
                        data: {
                            acknowledged: true,
                            insertedId: savedPromo._id 
                        },
                        message: "Successfully Add Promo.",
                        success: true
                    }
                );

            } catch (error) {

                res.status(400).json(
                    {
                        requestId: uuidv4(), 
                        data: null,
                        message:  (error as Error).message,
                        success: false
                    }
                );
            }

        }

        static async GetPromo  (req : any , res:any)  {

            try {

                const promo = await PromoModel.find({isDeleted:false});
                
                res.status(200).json({
                    requestId: uuidv4(),
                    data: promo,
                    success: true
                });
            
            } catch (error) {

                console.log(error);
                // Kirim hasil response
                return res.status(400).json({
                requestId: uuidv4(),
                data: null,
                message: (error as Error).message || "Internal Server Error",
                success: false
                });

            }
        
        }

        static async DeletedPromo  (req : any , res:any)  {

            try {

                const { id } = req.params;

                // ✅ Validasi jika id tidak ada
                if (!id) {
                    return res.status(400).json({
                        requestId: uuidv4(),
                        data: null,
                        message: "id Promo is required!",
                        success: false
                    });
                }
        
                // ✅ Cari promo berdasarkan id
                const Promo = await PromoModel.findOneAndUpdate( 
                { _id : new ObjectId(id), isDeleted: false },
                { isDeleted: true },
                { new: true } // Mengembalikan data yang diperbarui
                );


                if (!Promo) {
                    return res.status(404).json({
                        requestId: uuidv4(),
                        data: null,
                        message: "Promo not found!",
                        success: true
                    });
                }

                res.status(200).json({
                    requestId: uuidv4(),
                    data: Promo,
                    message: `Promo ${Promo.title} has deleted!`,
                    success: true
                });
            
            } catch (error) {

                console.log(error);
                // Kirim hasil response
                return res.status(400).json({
                requestId: uuidv4(),
                data: null,
                message: (error as Error).message || "Internal Server Error",
                success: false
                });

            }
        
        }   

}