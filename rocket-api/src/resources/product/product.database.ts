import { Product } from './product.model';

const getProductById = async (id: string) => await Product.findById(id).lean().exec();

export default { getProductById };
