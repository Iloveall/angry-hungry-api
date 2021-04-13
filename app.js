const express = require('express');
const path = require('path');
const app = express();
const models = require('./models');
const ProductCategory = models.ProductCategory;
const Product = models.Product;
const ProductOption = models.ProductOption;
const ProductOptionProduct = models.ProductOptionProduct;
const cors = require('cors');

// Product.belongsToMany(ProductOption, { through: 'ProductProductOptions' });
// ProductOption.belongsToMany(Product, { through: 'ProductProductOptions' });
//
// models.sequelize.sync({force: false});

// npx sequelize-cli model:generate --name ProductCategory --attributes name:string,url:string
// npx sequelize-cli model:generate --name Product --attributes name:string,description:string,category:integer,image:string,price:decimal
// npx sequelize-cli model:generate --name ProductOption --attributes name:string,description:string,product:integer
// npx sequelize-cli model:generate --name ProductOptionProduct --attributes productId:integer,productOptionId:integer
// npx sequelize-cli seed:generate --name demo-products
// npx sequelize-cli seed:generate --name demo-product-categories
// npx sequelize-cli seed:generate --name demo-product-options
// npx sequelize-cli seed:generate --name demo-product-options-product

// const testMiddleware = (req, res, next) => {
//     const { specialParam } = req.query;
//
//     if (!specialParam) {
//         return res.send('There is no special param');
//     }
//
//     next();
// };

// await se

const getPagination = (page, size = 10) => {
    const limit = +size;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};

const getPagingData = (data, page, limit, rowsKey) => {
    const { count: totalItems, rows } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { [rowsKey]: rows, pagination: {totalItems, totalPages, currentPage} };
};

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(cors());
app.use(express.static(publicDirectoryPath));

// app.use('/product-categories', testMiddleware);

// app.use((req, res, next) => {
//     console.log('mid 1');
//
//     setTimeout(() => next(), 2000);
// });
//
// app.use((req, res, next) => {
//     console.log('mid 2');
//
//     setTimeout(() => next(), 2000);
// });

app.get('/product-categories', async (req, res) => {
    const { page, size } = req.query;
    const { limit, offset } = getPagination(page, size);

    const data = await ProductCategory.findAndCountAll({ limit, offset });

    const paginatedData = getPagingData(data, page, limit, 'productCategories');

    res.send(paginatedData);
});

app.get('/products', async (req, res) => {
    const { page, size, category } = req.query;
    const { limit, offset } = getPagination(page, size);
    let where = {};

    if (category) {
        const categoryModel = await ProductCategory.findOne({ where: { url: category } });

        where = {...where, categoryId: categoryModel.id};
    }

    const products = await Product.findAndCountAll({ where,  limit, offset, include: ['category'] });

    const paginatedProducts = getPagingData(products, page, limit, 'products');

    res.send(paginatedProducts);
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;

    const product = await Product.findOne({
        where: { id },
        // include: ['options'],
        include: [{
            model: ProductOption,
            as: 'options',
            through: {
                // model: ProductOptionProduct,
                // as: 'productOptionProducts',
                attributes: []
            },
        }],
    });

    res.send(product);
});

app.get('/options', async (req, res) => {
    const options = await ProductOption.findAll();

    res.send(options);
});


app.listen(3000, () => {
    console.log('Started 3000');
});
