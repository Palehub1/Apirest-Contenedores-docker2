
const express = require('express')
const app = express()
const cors = require('cors')

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))

const tipoProyecto = require('./routes/tipoProyecto')
const cliente = require('./routes/cliente')
const universidad = require('./models/universidad')
const proyecto = require('./models/proyecto')
const etapa = require('./models/etapa')

// middlewares
app.use('/api/tiposproyectos', tipoProyecto)
app.use('/api/clientes', cliente)
app.use('/api/universidades', universidad)
app.use('/api/proyectos', proyecto)
app.use('/api/estapas', etapa)


module.exports = app