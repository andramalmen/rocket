import { Product } from './product.model';

const getAllProducts = async () => await Product.find().lean().exec();

const getProductById = async (id: string) => await Product.findById(id).lean().exec();

export default { getAllProducts, getProductById };
