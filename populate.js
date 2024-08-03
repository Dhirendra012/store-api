// Here we are just pushing our data first that we can get by manipulating it
// The data is in products.json 
// Here we will connect to Database and push that data

require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProducts = require('./products.json');

const start = async () => {
    try 
    {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log("Success ?");
        process.exit(0);
    } 
    catch (error) 
    {
        console.log(error);    
        process.exit(1);
    }
}

start();