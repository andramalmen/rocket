import { IProduct } from './product.interface';
import { Product } from './product.model';

const getAllProducts = async () => await Product.find().lean().exec();

const createProduct = async (product: IProduct) => await Product.create(product);

const getProductById = async (id: string) => await Product.findById(id).lean().exec();

export default { createProduct, getAllProducts, getProductById };
