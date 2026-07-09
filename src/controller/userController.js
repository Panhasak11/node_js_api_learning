
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

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {name, email, password, roleId} = req.body;
    const findUser = await prisma.user.findUnique({ where: {id: parseInt(id)} });
    if(!findUser){
        return res.status(404).json({message: "User not found"});
    }
    const user = await prisma.user.update({
        where: {id: parseInt(id)},
        data:{
            name,
            email,
            password,
            roleId
        }
    })
    res.status(200).json(user);
};

const deleteUser = async (req, res) => {
    const {id} = req.params;
    findUser = await prisma.user.findUnique({ where: {id: parseInt(id)} });
    if(!findUser){
        return res.status(404).json({message: "User not found"});
    }
    await prisma.user.delete({ where: {id: parseInt(id)} });
    res.status(204).send();

}



module.exports = { getAllUsers, createUser, getById, updateUser, deleteUser };