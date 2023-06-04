const { Router } = require('express')
const {createTipoProyecto, getTipoProyectos , updateTipoProyectoByID } =
 require('../controllers/ControltipoProyecto')

const router = Router()

// crear
router.post('/', createTipoProyecto)

//consultar todos
router.get('/', getTipoProyectos)

// consultar todos
router.put('/:id', updateTipoProyectoByID)

module.exports = router;