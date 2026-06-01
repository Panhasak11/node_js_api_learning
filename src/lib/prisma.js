
require('dotenv').config({
   path: require('path').resolve(__dirname, '../../.env')
});

const {PrismaClient} = require('../generated/prisma');
const { PrismaPg} = require('@prisma/adapter-pg');


const adapter = new PrismaPg(process.env.DATABASE_URL);
const prisma = new PrismaClient({adapter});

module.exports = prisma;