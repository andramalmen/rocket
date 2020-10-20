import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (error: any, _: Request, res: Response, next: NextFunction): void => {
    if (res.headersSent) {
        next(error);
    } else {
        res.status(500);
        res.json({
            message: error.message,
            ...(process.env.NODE_ENV === 'production' ? null : { stack: error.stack }),
        });
    }
};

export default errorMiddleware;
