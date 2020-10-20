import errorMiddleware from '../errorMiddleware';

test('calls next if headersSent is true', () => {
    const req: any = {};
    const res: any = {
        json: jest.fn(() => res),
        status: jest.fn(() => res),
        headersSent: true,
    };
    const next = jest.fn();
    const error = new Error('blah');
    errorMiddleware(error, req, res, next);
    expect(next).toHaveBeenCalledWith(error);
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
});

test('responds with 500 and the error object', () => {
    const req: any = {};
    const res: any = {
        json: jest.fn(() => res),
        status: jest.fn(() => res),
    };
    const next = jest.fn();
    const error = new Error('blah');
    errorMiddleware(error, req, res, next);
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.status).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith({
        message: error.message,
        stack: error.stack,
    });
    expect(res.json).toHaveBeenCalledTimes(1);
});
