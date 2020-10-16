import config from 'config';
import mongoose from 'mongoose';

export const connectDb = (
    url = config.get<string>('Database.url'),
    dbName = config.get<string>('Database.dbName')
) =>
    mongoose.connect(`${url}/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    });
