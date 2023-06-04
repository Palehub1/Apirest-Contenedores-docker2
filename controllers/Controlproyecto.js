const Proyecto = require('../models/proyecto')
const { request, response} = require('express')


// crear
const createProyecto = async (req = request, 
    res = response) => {
    try{
        const data = req.body
        console.log(data)
        const { tipoProyecto, cliente } = data;
        //validando tipo proyecto
        const tipoProyectosDB = tipoProyecto.findOne({
            _id: tipoProyecto._id
        })
        if(!tipoProyectosDB){
            return res.status(400).json({msg: 'Tipo proyecto invalido'})
        }
        // validando cliente
        const clientesDB = Cliente.findOne({
            _id: cliente._id
        })
        if(!clientesDB){
            return res.status(400).json({msg: 'Cliente invalido'})
        }

        const proyecto = new Proyecto(data)

        await proyecto.save()
        
        return res.status(201).json(proyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getProyecto = async (req = request, 
    res = response) => {
        try{
            const proyectosDB = await Proyecto.find()
                .populate({
                    path: 'tipoProyecto'
                })
                .populate({
                    path: 'cliente'
                })
                .populate({
                    path: 'etapa'
                })      
                .populate({
                    path: 'universidad'               
                })
                .populate({
                    path: 'proyecto'               
                })
          
            return res.json(proyectosDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}


// actualizar proyecto
const updateProyectoByID = async (req = request, 
    res = response) => {

    try{
        const { id } = req.params
        const data = req.body
        const proyecto  = await Proyecto.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(inventario)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }

}


module.exports = { 
    createProyecto, 
    getProyecto, 
    updateProyectoByID 
}