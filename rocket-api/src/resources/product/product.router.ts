import { Router } from 'express';
import {
    addProducts,
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    updateProduct,
} from './product.controller';

const router = Router();

// /api/products
router.route('/').get(getAllProducts).post(createProduct);

// /api/products/batch
router.route('/batch').post(addProducts);

// /api/products/:id
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

export default router;
