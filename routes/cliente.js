const { Router } = require('express')
const { createCliente, getClientes, updateClienteByID} =
 require('../controllers/Controlcliente')

const router = Router()

// crear
router.post('/', createCliente)

// consultar todos
router.get('/', getClientes)

//actualizar
router.put('/:id', updateClienteByID)


module.exports = router;