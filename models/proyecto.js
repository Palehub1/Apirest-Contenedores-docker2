const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: Number,
        required: [true, 'Número requerido'],
        unique: [true, 'Numero en uso']
    },
    titulo: {
        type: String,
        required: [true, 'titulo requerido']
    },
    fechaIniciacion: {
        type: Date,
        required: [true, 'fecha requerida']
    },    
    fechaEntrega: {
            type: Date,
            required: [true, 'fecha requerida']    
    },
    valor:{
    type: Number,
    required: [true, 'Valor requerido']
    },
    fechaCreacion: {
        type: Date,
        default: new Date(),
        required: [true, 'fecha requerida']
    },
    fechaActualizacion: {
        type: Date,
        default: new Date(),
        required: [true, 'fecha requerida'] 
    },
    universisdad: {
        type: String,
        required: [true, 'Nombre de universidad requerido']
    },
    etapaDelProyecto: {
        type: String,
        required: [true, 'Etapa requerida']
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },

    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    }
    
})

module.exports = model('Proyecto', ProyectoSchema)
