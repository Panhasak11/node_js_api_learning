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

const setRolePermission = async (req, res) => {
    try {
        const { roleId, permissionIds } = req.body;
        
        // 1. Validate that permissionIds is a proper array
        if (!permissionIds || !Array.isArray(permissionIds)) {
            return res.status(400).json({ message: "Permission IDs must be an array!" });
        }

        // 2. Loop through and verify each permission ID exists
        for (const id of permissionIds) {
            // FIX 1: Added 'await' so the loop pauses and waits for the database result
            const findPermission = await prisma.permission.findUnique({
                where: { id: parseInt(id) }
            });

            // FIX 2: Send a 404 response immediately if an ID is missing instead of throwing a generic 500 error
            if (!findPermission) {
                return res.status(404).json({ 
                    message: `Permission with ID ${id} does not exist!` 
                });
            } 
        }

        // 3. Update the role's permissions
        const updateRole = await prisma.role.update({
            where: { id: parseInt(roleId) },
            data: {
                permissions: {
                    // FIX 3: Map with implicit return wrapping an object -> ({ id: parseInt(id) })
                    set: permissionIds.map(id => ({ 
                        id: parseInt(id) 
                    }))
                }
            },
            include: {
                permissions: true
            }
        });

        // 4. Return the updated role data
        return res.status(200).json(updateRole);

    } catch (error) {
        console.error(error);

        if (error.code === 'P2025') {
            return res.status(404).json({ message: "The Role ID provided does not exist." });
        }

        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { createRole, getAllRoles, getById, setRolePermission };