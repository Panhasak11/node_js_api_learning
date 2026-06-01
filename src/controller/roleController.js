const prisma = require('../lib/prisma');



const createRole = async(req, res) =>{
    const {name} = req.body;
    const role = await prisma.role.create({ 
        data:{
            name
        }
    });
    res.status(201).json(role);
}

const getAllRoles = async(req, res) =>{
    const roles = await prisma.role.findMany();
    res.json(roles);
}

const getById = async(req, res) =>{
    const id = req.params.id;
    const role = await prisma.role.findUnique({
        where: {id: parseInt(id)},
    });
    res.status(200).json(role);
}

module.exports = { createRole, getAllRoles, getById };