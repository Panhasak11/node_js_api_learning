const dotenv = require('dotenv').config();
const express = require('express');

// Declare routes
const userRoute = require('./routes/userRoute');
const roleRoute = require('./routes/roleRoute');

const app = express();
app.use(express.json());

app.use('/api/users', userRoute);
app.use('/api/roles', roleRoute);


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});