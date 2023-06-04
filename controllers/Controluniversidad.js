const Universidad = require('../models/universidad')
const { request, response} = require('express')

// crear
const createUniversidad = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const direccion = req.body.direccion
        const telefono = req.body.telefono
        const universidadesDB = await Universidad.findOne({nombre})
        
        if(universidadesDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre, 
            direccion,
            telefono,

        }
        const cliente = new Cliente(data)
        console.log(cliente)
        await cliente.save()
        return res.status(201).json(cliente)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getUniversidades = async (req = request, 
    res = response) => {
        try{
            const { estado } = req.query
            const clientesDB = await Clientes.find({estado})//select * from Cliente where estado=?
            return res.json(clientesDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar por ID
const updateUniversidadByID = async (req = request,
    res = response) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        req.query
        data.fechaActualizacion = new Date()
        console.log(data)
        const cliente = await Cliente.findByIdAndUpdate(id, data, {new: true})
        return res.json(cliente)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
}

module.exports = { 
    createUniversidad, 
    getUniversidades, 
    updateUniversidadByID
}