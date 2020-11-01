import faker from 'faker';

const buildProduct = (overrides: any) => ({
    _id: faker.random.uuid(),
    categories: [faker.commerce.department()],
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    manufacturer: faker.company.companyName(),
    image: faker.image.imageUrl(),
    thumbnail: faker.image.imageUrl(),
    inStock: faker.random.boolean(),
    __v: 0,
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    ...overrides,
});

const buildReq = ({ ...overrides } = {}) => {
    const req = { params: {}, ...overrides };
    return req;
};

const buildRes = (overrides = {}) => {
    const res: any = {
        json: jest.fn(() => res).mockName('json'),
        status: jest.fn(() => res).mockName('status'),
        ...overrides,
    };
    return res;
};

const getId = faker.random.uuid;

export { buildProduct, buildReq, buildRes, getId };
