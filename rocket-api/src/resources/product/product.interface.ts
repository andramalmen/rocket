export interface IProduct {
    _id: string;
    name: string;
    price: number;
    manufacturer: string;
    categories: [string];
    image: string;
    thumbnail: string;
    inStock: boolean;
    __v?: 0;
    createdAt?: string;
    updatedAt?: string;
}
