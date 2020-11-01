import { buildProduct, buildReq, buildRes, getId } from '../../../test/generate';
import { getProductById, getAllProducts, createProduct } from '../product.controller';
import productDb from '../product.database';

jest.mock('../product.database');

beforeEach(() => {
    jest.clearAllMocks();
});

test('getAllProducts returns an array of products', async () => {
    const products = [buildProduct({})];
    const getAsyncMockAllProducts = productDb.getAllProducts as jest.Mock;
    getAsyncMockAllProducts.mockResolvedValueOnce(products);

    const req: any = buildReq();
    const res = buildRes();

    await getAllProducts(req, res);

    expect(getAsyncMockAllProducts).toHaveBeenCalled();
    expect(getAsyncMockAllProducts).toHaveBeenCalledTimes(1);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status).toHaveBeenCalledTimes(1);

    expect(res.json).toHaveBeenCalledWith({
        data: products,
    });
});

test('getAllProducts returns status 400 if no products were found', async () => {
    const getAsyncMockAllProducts = productDb.getAllProducts as jest.Mock;
    getAsyncMockAllProducts.mockResolvedValueOnce(null);

    const req: any = buildReq();
    const res = buildRes();

    await getAllProducts(req, res);

    expect(getAsyncMockAllProducts).toHaveBeenCalled();
    expect(getAsyncMockAllProducts).toHaveBeenCalledTimes(1);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.status).toHaveBeenCalledTimes(1);
});

test('createProduct returns a correct product if product was created', async () => {
    const product = buildProduct({});
    const getAsyncMockCreateProduct = productDb.createProduct as jest.Mock;
    getAsyncMockCreateProduct.mockResolvedValueOnce(product);

    const req: any = buildReq({ body: product });
    const res = buildRes();

    await createProduct(req, res);

    expect(getAsyncMockCreateProduct).toHaveBeenCalledWith(product);
    expect(getAsyncMockCreateProduct).toHaveBeenCalledTimes(1);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.status).toHaveBeenCalledTimes(1);

    expect(res.json).toHaveBeenCalledWith({
        data: product,
    });
});

test('getProductById returns a correct product if product was found', async () => {
    const product = buildProduct({});
    const params = { id: product._id };
    const getAsyncMockProductById = productDb.getProductById as jest.Mock;
    getAsyncMockProductById.mockResolvedValueOnce(product);

    const req: any = buildReq({ params });
    const res = buildRes();

    await getProductById(req, res);

    expect(getAsyncMockProductById).toHaveBeenCalledWith(product._id);
    expect(getAsyncMockProductById).toHaveBeenCalledTimes(1);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status).toHaveBeenCalledTimes(1);

    expect(res.json).toHaveBeenCalledWith({
        data: product,
    });
});

test('getProductById returns status code 400 if no product was found', async () => {
    const id = getId();
    const params = { id };
    const getAsyncMockProductById = productDb.getProductById as jest.Mock;
    getAsyncMockProductById.mockResolvedValueOnce(null);

    const req: any = buildReq({ params });
    const res = buildRes();

    await getProductById(req, res);

    expect(getAsyncMockProductById).toHaveBeenCalledWith(id);
    expect(getAsyncMockProductById).toHaveBeenCalledTimes(1);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.status).toHaveBeenCalledTimes(1);
});
