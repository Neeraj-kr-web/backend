const dotenv = require('dotenv');
dotenv.config();
const { app } = require('./src/app')
const port = process.env.PORT || 3000;
const { connectDB } = require('./db/connection');

connectDB().then(() => {
    console.log('Database connected, starting server...');
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`);
    });
});