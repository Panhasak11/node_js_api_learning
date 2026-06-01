
const prisma = require('../lib/prisma');

const getAllUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
};

const createUser = async(req, res) => {
    const {name, email, password, roleId} = req.body;
    const user = await prisma.user.create({
        data:{
            name,
            roleId,
            email,
            password
        },
    });
    res.status(201).json(user);
}

const getById = async (req, res) =>{
    const {id} = req.params;
    const user = await prisma.user.findUnique({
        where: {id: parseInt(id)},
    });
    res.status(200).json(user);
};

module.exports = { getAllUsers, createUser, getById };