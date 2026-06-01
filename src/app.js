const dotenv = require('dotenv').config();
const express = require('express');

// Declare routes
const userRoute = require('./routes/userRoute');
// const userRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());

app.use('/api/users', userRoute);

app.use('/', (req, res) => {
    res.send('Welcome to the API');
});
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});