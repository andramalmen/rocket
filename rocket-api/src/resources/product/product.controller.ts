import { Request, Response } from 'express';
import { Product } from './product.model';

export const getAllProducts = async (_: Request, res: Response): Promise<void> => {
    try {
        const doc = await Product.find().lean().exec();

        if (!doc) {
            return res.status(400).end();
        }

        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const doc = await Product.create(req.body);
        res.status(201).json({ data: doc });
    } catch (e) {
        if (e.code === 11000) {
            console.error('Duplicate product name');
        } else {
            const errors = Object.keys(e.errors);
            for (const propName of errors) {
                console.error(e.errors[propName].message);
            }
        }
        res.status(400).end();
    }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const doc = await Product.findById(req.params.id).lean().exec();

        if (!doc) {
            return res.status(400).end();
        }

        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
};

export const addProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const doc = await Product.insertMany(req.body, { ordered: false });
        res.status(201).json({ data: doc });
    } catch (e) {
        console.error('Some products were not added');

        res.status(400).end();
    }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedDoc = await Product.findByIdAndUpdate(
            {
                _id: req.params.id,
            },
            req.body,
            { new: true }
        )
            .lean()
            .exec();

        if (!updatedDoc) {
            return res.status(400).end();
        }

        res.status(200).json({ data: updatedDoc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const removed = await Product.findByIdAndRemove({
            _id: req.params.id,
        });

        if (!removed) {
            return res.status(400).end();
        }

        res.status(200).json({ data: removed });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
};
