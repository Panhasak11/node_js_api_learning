const prisma = require('../lib/prisma');

const createPermission = async(req, res) =>{
    if(!req.body){
        return res.status(400).json({message: "Content can not be empty!"});
    }
    const { name } = req.body;    
    const permission = await prisma.permission.create({
        data:{
            name
        }
    });
    res.status(201).json(permission);
}

const getAllPermissions = async(req, res) =>{
    const permissions = await prisma.permission.findMany();
    res.json(permissions);
}

const getById = async(req, res) =>{
    const id = re.params.id;
    const permission = await prisma.permission.findUnique({
        where: {id: parseInt(id)},
    });
    res.status(200).json(permission);
}

module.exports = { createPermission, getAllPermissions, getById };