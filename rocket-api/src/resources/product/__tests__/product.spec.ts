import productDb from '../product.database';
import { getProductById } from '../product.controller';
import { buildProduct, buildReq, buildRes, getId } from '../../../test/generate';

jest.mock('../product.database');

beforeEach(() => {
    jest.clearAllMocks();
});

test('getProductById returns a correct product if product was found', async () => {
    const product = buildProduct({});
    const params = { id: product._id };
    const getAsyncMock = productDb.getProductById as jest.Mock;
    getAsyncMock.mockResolvedValueOnce(product);

    const req: any = buildReq({ params });
    const res = buildRes();

    await getProductById(req, res);

    expect(getAsyncMock).toHaveBeenCalledWith(product._id);
    expect(getAsyncMock).toHaveBeenCalledTimes(1);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.status).toHaveBeenCalledTimes(1);

    expect(res.json).toHaveBeenCalledWith({
        data: product,
    });
});

test('getProductById returns status code 400 if no product was found', async () => {
    const id = getId();
    const params = { id };
    const getAsyncMock = productDb.getProductById as jest.Mock;
    getAsyncMock.mockResolvedValueOnce(null);

    const req: any = buildReq({ params });
    const res = buildRes();

    await getProductById(req, res);

    expect(getAsyncMock).toHaveBeenCalledWith(id);
    expect(getAsyncMock).toHaveBeenCalledTimes(1);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.status).toHaveBeenCalledTimes(1);
});
