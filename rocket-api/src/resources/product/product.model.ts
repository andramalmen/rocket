import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Product name must be defined'],
            trim: true,
            unique: true,
            dropDups: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        manufacturer: {
            type: String,
            required: true,
            trim: true,
        },
        categories: {
            type: [String],
            required: true,
        },
        image: {
            type: String,
            required: [true, 'The image must be defined'],
            trim: true,
            match: [
                /(https?:\/\/.*\.(?:png|jpg|gif|JPG))/i,
                'The image must be a valid image adress',
            ],
        },
        thumbnail: {
            type: String,
            required: [true, 'The thumbnail image must be defined'],
            trim: true,
            match: [
                /(https?:\/\/.*\.(?:png|jpg|gif))/i,
                'The thumnbail must be a valid image adress',
            ],
        },
        inStock: {
            type: Boolean,
            required: true,
        },
    },
    { timestamps: true }
);

productSchema.index({ name: 1 }, { unique: true });

export const Product = mongoose.model('product', productSchema);
